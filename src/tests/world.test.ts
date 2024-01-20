/*
- Cualquier célula viva con menos dos vecinos muere por subpoblación.
- Cualquier célula viva con más de tres vecinos muere por superpoblación.
- Cualquier célula viva con dos o tres vecinos sigue viva en la siguiente generación.
- Cualquier célula muerta con exactamente tres vecinos vivos revive nuevamente.
*/

import { Cell } from '../core/cell';
import { World } from '../core/world';

describe('The World', () => {
	it('should create a 2D World with positive colums and rows number.', () => {
		const world = create4x8InitialWorld();

		expect(world).toBeInstanceOf(World);
	});

	it('should throw an exception with zero number of columns.', () => {
		const ROWS: number = 4;
		const COLS: number = 0;

		expect(() => {
			World.create(ROWS, COLS);
		}).toThrow(Error);
	});

	it('should throw an exception with zero number of rows.', () => {
		const ROWS: number = 0;
		const COLS: number = 2;

		expect(() => {
			World.create(ROWS, COLS);
		}).toThrow(Error);
	});

	it('should create initial 1x1 world with only a dead cell.', () => {
		const ROWS: number = 1;
		const COLS: number = 1;

		const world = World.create(ROWS, COLS);
		const actualGen = world.currentGeneration();

		expect(actualGen.length).toBe(1);
		expect(actualGen[0].length).toBe(1);
		expect(actualGen[0][0]).toBeInstanceOf(Cell);
		expect(actualGen[0][0].isAlive()).toBe(false);
	});

    it('should create initial 1x1 world with only a living cell.', () => {
		const ROWS: number = 1;
		const COLS: number = 1;

		const world = World.create(ROWS, COLS);
        const actualGen = world.currentGeneration();
        world.setLivingCell(0,0);

		expect(actualGen.length).toBe(1);
		expect(actualGen[0].length).toBe(1);
		expect(actualGen[0][0]).toBeInstanceOf(Cell);
        expect(actualGen[0][0].isAlive()).toBe(true);
	});

    it('should create initial 4x8 world with only a living cell.', () => {
		const world = create4x8InitialWorld();
        
        const actualGen = world.currentGeneration();
        world.setLivingCell(1,4);

		expect(actualGen.length).toBe(4);
		expect(actualGen[0].length).toBe(8);
        expect(actualGen[1][4].isAlive()).toBe(true);
	});

    it('when a living cell has less than two living neighbours then the cell is dead by underpopulation.', () => {
		const world = create4x8InitialWorld();
		world.setLivingCell(1, 4);
        
        const nextGen = world.nextGeneration();
        
        expect(nextGen[1][4].isAlive()).toBe(false);
	});
});
function create4x8InitialWorld() {
    const ROWS: number = 4;
    const COLS: number = 8;

    const world = World.create(ROWS, COLS);
    return world;
}

