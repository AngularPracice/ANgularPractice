import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PracticeComponent} from './PracticeComponent';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
  	PracticeComponent,
  	MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
