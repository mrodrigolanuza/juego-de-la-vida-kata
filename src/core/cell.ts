export class Cell {
    private isAlive: boolean;

    private constructor(initialStatus: boolean) {
        this.isAlive = initialStatus;    
    }

    static createAlive(): Cell {
        const alive: boolean = true;
        return new Cell(alive);
    }

    static createDead(): Cell {
        const dead: boolean = false;
        return new Cell(dead);
    }
}
