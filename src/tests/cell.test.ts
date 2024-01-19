import { Cell } from '../core/cell';

describe('The Cell', ()=>{

	 it('should be created', ()=>{

		let cell = Cell.createAlive();
		
        expect(cell).toBeInstanceOf(Cell); 
     });
});