import { Cell } from "./cell";

export class World {
    private world: Cell[][] = [];

    private constructor(rows: number, cols: number) {
        
    }

    static create(rows: number, cols: number): World {
        if(cols <= 0)
            throw Error("Number of columns should be greater than zero.");
        
        return new World(rows, cols);
    }
}