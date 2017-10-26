import { Component } from '@angular/core';
import {PracticeComponent} from './PracticeComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular2 Demo purpose';
  function1(){
  	return this.title;
  }

  function2(){

  	return this.function1();
  }
}
