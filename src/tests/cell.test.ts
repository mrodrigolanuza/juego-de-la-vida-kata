import { Cell } from '../core/cell';

describe('The Cell', ()=>{

	 it('should be asked about its state of life.', ()=>{

		let cell = Cell.createAlive();
		
        expect(cell.isAlive()).toBe(true); 
     });
});