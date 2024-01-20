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

	setLivingCell(row: number, col: number){
        this.world[row][col].setLivingState();
    }
    
    currentGeneration() {
        return this.world;
	}

    nextGeneration() {
        let newGenWorld = this.createWorldWithDeadCells(this.ROWS, this.COLS);

        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                const totalLivingNeighbour = this.numberLivingNeighboursOfCell(row, col);
                newGenWorld[row][col].setDeadState();
                if((totalLivingNeighbour == 2)||(totalLivingNeighbour == 3)){
                    newGenWorld[row][col].setLivingState();
                }
            }
        }
        
        return newGenWorld;
	}

    private createWorldWithDeadCells(rows: number, cols: number): Cell[][] {
        let newWorld: Cell[][] = [];
        for (let row = 0; row < rows; row++) {
            const row: Cell[] = [];
            for (let col = 0; col < cols; col++) {
                row.push(Cell.createDead());
            }
            newWorld.push(row);
        }
        return newWorld;
    }

    private numberLivingNeighboursOfCell(row: number, col:number): number{
        return 0;
    }
}
