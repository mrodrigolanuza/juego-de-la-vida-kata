export class Cell {
    private stateOfLive: boolean;

    private constructor(initialStatus: boolean) {
        this.stateOfLive = initialStatus;    
    }

    static createAlive(): Cell {
        const alive: boolean = true;
        return new Cell(alive);
    }

    static createDead(): Cell {
        const dead: boolean = false;
        return new Cell(dead);
    }

    isAlive (){
        return this.stateOfLive;
    }
}
