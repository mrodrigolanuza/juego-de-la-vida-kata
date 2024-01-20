import { Cell } from './cell';

export class World {
	private world: Cell[][] = [];
	private ROWS: number = 0;
	private COLS: number = 0;

	private constructor(rows: number, cols: number) {
		this.world = this.createWorldWithDeadCells(rows, cols);
		this.ROWS = rows;
		this.COLS = cols;
	}

	static create(rows: number, cols: number): World {
		if (rows <= 0) throw Error('Number of rows should be greater than zero.');
		if (cols <= 0) throw Error('Number of columns should be greater than zero.');

		return new World(rows, cols);
	}

	setLivingCell(row: number, col: number) {
		this.world[row][col].setLivingState();
	}

	currentGeneration() {
		return this.world;
	}

	nextGeneration() {
		const newGenWorld = this.createWorldWithDeadCells(this.ROWS, this.COLS);
		this.createNextGeneration(newGenWorld);
		return newGenWorld;
	}

    private createNextGeneration(newGenWorld: Cell[][]) {
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                newGenWorld[row][col].setDeadState();
                if (this.hasLivingCellSuitableRangeOfLivingNeighbours(row, col) ||
                    this.hasDeadCellThreeLivingNeighbours(row, col)) {
                    newGenWorld[row][col].setLivingState();
                }
            }
        }
    }

	private hasDeadCellThreeLivingNeighbours(row: number, col: number): boolean {
        const ALIVE_NEIGHBOURS_FOR_REVIVING = 3;
		return this.isDeadCell(row, col) && this.numberLivingNeighboursOfCell(row, col) == ALIVE_NEIGHBOURS_FOR_REVIVING;
	}

    
	private hasLivingCellSuitableRangeOfLivingNeighbours(row: number, col: number): boolean {
        const totalLivingNeighbour = this.numberLivingNeighboursOfCell(row, col);
		return this.world[row][col].isAlive() && (totalLivingNeighbour == 2 || totalLivingNeighbour == 3);
	}
    
	private numberLivingNeighboursOfCell(row: number, col: number): number {
        let livingNeighbours: number = 0;
        
		if (this.existUpperLeftNeighbour(row, col) && this.isLivingUpperLeftCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existUpperNeighbour(row) && this.isLivingUpperCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existUpperRightNeighbour(row, col) && this.isLivingUpperRightCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existRightNeighbour(col) && this.isLivingRightCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existLowerRightNeighbour(row, col) && this.isLivingLowerRightCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existLowerNeighbour(row) && this.isLivingLowerCell(row, col)) {
			livingNeighbours++;
		}
        
		if (this.existLowerLeftNeighbour(row, col) && this.isLivingLowerLeftCell(row, col)) {
            livingNeighbours++;
		}
        
		if (this.existLeftNeighbour(col) && this.isLivingLeftCell(row, col)) {
            livingNeighbours++;
		}
        
		return livingNeighbours;
	}
    
	private isLivingLeftCell(row: number, col: number) {
        return this.world[row][col - 1].isAlive();
	}
    
	private existLeftNeighbour(col: number) {
        return col - 1 >= 0;
	}
    
	private isLivingLowerLeftCell(row: number, col: number) {
        return this.world[row + 1][col - 1].isAlive();
	}
    
	private existLowerLeftNeighbour(row: number, col: number) {
        return row + 1 < this.ROWS && col - 1 >= 0;
	}
    
	private isLivingLowerCell(row: number, col: number) {
        return this.world[row + 1][col].isAlive();
	}
    
	private existLowerNeighbour(row: number) {
        return row + 1 < this.ROWS;
	}
    
	private isLivingLowerRightCell(row: number, col: number) {
        return this.world[row + 1][col + 1].isAlive();
	}
    
	private existLowerRightNeighbour(row: number, col: number) {
        return row + 1 < this.ROWS && col + 1 < this.COLS;
	}
    
	private isLivingRightCell(row: number, col: number) {
        return this.world[row][col + 1].isAlive();
	}
    
	private existRightNeighbour(col: number) {
        return col + 1 < this.COLS;
	}
    
	private isLivingUpperRightCell(row: number, col: number) {
        return this.world[row - 1][col + 1].isAlive();
	}
    
	private existUpperRightNeighbour(row: number, col: number) {
        return row - 1 >= 0 && col + 1 < this.COLS;
	}
    
	private isLivingUpperCell(row: number, col: number) {
        return this.world[row - 1][col].isAlive();
	}
    
	private existUpperNeighbour(row: number) {
        return row - 1 >= 0;
	}
    
	private isLivingUpperLeftCell(row: number, col: number) {
        return this.world[row - 1][col - 1].isAlive();
	}
    
	private existUpperLeftNeighbour(row: number, col: number) {
        return row - 1 >= 0 && col - 1 >= 0;
	}
    
    private isDeadCell(row: number, col: number) {
        return !this.world[row][col].isAlive();
    }
    
	private createWorldWithDeadCells(rows: number, cols: number): Cell[][] {
        const newWorld: Cell[][] = [];
		for (let row = 0; row < rows; row++) {
            const row: Cell[] = [];
			for (let col = 0; col < cols; col++) {
                row.push(Cell.createDead());
			}
			newWorld.push(row);
		}
		return newWorld;
	}
}
