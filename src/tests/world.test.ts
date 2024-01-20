import { Cell } from '../core/cell';
import { World } from '../core/world';

describe('The World', () => {
	it('should create a 2D World with positive colums and rows number.', () => {
		const ROWS: number = 4;
		const COLS: number = 8;

		const world = World.create(ROWS, COLS);

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

	it('should create 1x1 world with only a dead cell.', () => {
		const ROWS: number = 1;
		const COLS: number = 1;

		const world = World.create(ROWS, COLS);
		const nextGen = world.nextGeneration();

		expect(nextGen.length).toBe(1);
		expect(nextGen[0].length).toBe(1);
		expect(nextGen[0][0]).toBeInstanceOf(Cell);
		expect(nextGen[0][0].isAlive()).toBe(false);
	});
});
