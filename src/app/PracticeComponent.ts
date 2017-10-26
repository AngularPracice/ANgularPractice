import {Component} from '@angular/core';

@Component({

	selector:'practice-component',
	template:'<p>sample text{{title}}</p>'
})
export class PracticeComponent {
  title : string = 'Angular2 Demo purpose';
  
}