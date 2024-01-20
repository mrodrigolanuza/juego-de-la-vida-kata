import { Cell } from '../core/cell';

describe('The Cell', () => {
	it('should be created alive.', () => {
		const cell = Cell.createAlive();

		expect(cell.isAlive()).toBe(true);
	});

	it('should be created dead.', () => {
		const cell = Cell.createDead();

		expect(cell.isAlive()).toBe(false);
	});

	it('should be asked about its state of life.', () => {
		const cell = Cell.createAlive();

		expect(cell.isAlive()).toBe(true);
	});

	it('should be set in living state.', () => {
		const cell = Cell.createDead();

		cell.setLivingState();

		expect(cell.isAlive()).toBe(true);
	});

    it('should be set in dead state.', () => {
		const cell = Cell.createAlive();

		cell.setDeadState();

		expect(cell.isAlive()).toBe(false);
	});
});
