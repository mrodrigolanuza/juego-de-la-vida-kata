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

    isAlive(): boolean {
        return this.stateOfLive;
    }

    setLivingState(): void{
        this.stateOfLive = true;
    }
}
