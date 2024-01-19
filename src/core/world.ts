import { Cell } from "./cell";

export class World {
    private world: Cell[][] = [];

    private constructor(rows: number, cols: number) {
        
    }

    static create(rows: number, cols: number): World {
        if(rows <= 0)
            throw Error("Number of rows should be greater than zero.");
        
        if(cols <= 0)
            throw Error("Number of columns should be greater than zero.");
        
        return new World(rows, cols);
    }
}