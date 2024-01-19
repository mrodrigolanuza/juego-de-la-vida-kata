import { Cell } from '../core/cell';

describe('The Cell', ()=>{

	it('should be created alive.', ()=>{

		let cell = Cell.createAlive();
		
        expect(cell.isAlive()).toBe(true); 
     }); 

     it('should be created dead.', ()=>{

		let cell = Cell.createDead();
		
        expect(cell.isAlive()).toBe(false); 
     }); 
    
    it('should be asked about its state of life.', ()=>{

		let cell = Cell.createAlive();
		
        expect(cell.isAlive()).toBe(true); 
     });
});