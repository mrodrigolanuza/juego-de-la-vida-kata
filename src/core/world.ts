import { Cell } from "./cell";

export class World {
    private world: Cell[][] = [];

    private constructor(rows: number, cols: number) {
        
    }

    static create(rows: number, cols: number): World {
        return new World(rows, cols);
    }
}