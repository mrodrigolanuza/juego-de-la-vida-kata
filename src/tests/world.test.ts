import { World } from "../core/world";

describe('The World', ()=>{

	 it('should create a 2D World with positive colums and rows number.', ()=>{
        const ROWS: number = 4;
        const COLS: number = 8;

		let world = World.create(ROWS, COLS);
		
        expect(world).toBeInstanceOf(World); 
     });
     
    it('should should throw an exception with zero number of columns.', ()=>{
        const ROWS: number = 4;
        const COLS: number = 0;

        expect(()=>{
            let world = World.create(ROWS, COLS);    
        }).toThrow(Error);
        }); 
});