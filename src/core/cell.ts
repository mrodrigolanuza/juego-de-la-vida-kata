export class Cell {
    private status: boolean;

    private constructor(initialStatus: boolean) {
        this.status = initialStatus;    
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
