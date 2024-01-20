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
                newGenWorld[row][col].setDeadState();
                if(this.hasLivingCellIdealRangeNumberOfLivingNeighbours (row, col) ||
                   this.hasDeadCellThreeLivingNeighbours(row, col)){
                    newGenWorld[row][col].setLivingState();
                }
            }
        }

        return newGenWorld;
	}

    private hasDeadCellThreeLivingNeighbours(row: number, col: number): boolean {
        const totalLivingNeighbour = this.numberLivingNeighboursOfCell(row, col);
        if (!this.world[row][col].isAlive() && (totalLivingNeighbour == 3)) {
            return true;
        }
        return false;
    }

    private hasLivingCellIdealRangeNumberOfLivingNeighbours(row: number, col: number): boolean {
        const totalLivingNeighbour = this.numberLivingNeighboursOfCell(row, col);
        if (this.world[row][col].isAlive() && ((totalLivingNeighbour == 2) || (totalLivingNeighbour == 3))) {
            return true;
        }
        return false;
    }

    private numberLivingNeighboursOfCell(row: number, col:number): number{
        let livingNeighbours: number = 0;
        
        //Diagonal superior izquierda
        if(((row - 1) >= 0) && ((col - 1) >= 0)){
            if(this.world[row - 1][col - 1].isAlive()){
                livingNeighbours++;
            }
        }
        //Superior
        if((row - 1) >= 0){
            if(this.world[row - 1][col].isAlive()){
                livingNeighbours++;
            }
        }
        //Diagonal superior derecha
        if(((row - 1) >= 0) && ((col + 1) < this.COLS)){
            if(this.world[row - 1][col + 1].isAlive()){
                livingNeighbours++;
            }
        }
        //Derecha
        if((col + 1) < this.COLS){
            if(this.world[row][col + 1].isAlive()){
                livingNeighbours++;
            }
        }
        //Diagonal inferior derecha
        if(((row + 1) < this.ROWS) && ((col + 1) < this.COLS)){
            if(this.world[row + 1][col + 1].isAlive()){
                livingNeighbours++;
            }
        }
        //Inferior
        if((row + 1) < this.ROWS){
            if(this.world[row + 1][col].isAlive()){
                livingNeighbours++;
            }
        }
        //Diagona inferior izquierda
        if(((row + 1) < this.ROWS) && ((col - 1) >= 0)){
            if(this.world[row + 1][col - 1].isAlive()){
                livingNeighbours++;
            }
        }

        //Izquierda
        if((col - 1) >= 0){
            if(this.world[row][col - 1].isAlive()){
                livingNeighbours++;
            }
        }

        return livingNeighbours;
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
}
