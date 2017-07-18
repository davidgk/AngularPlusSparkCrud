import { Component } from '@angular/core';
import { MainComponent } from "app/commons/views/main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  entryComponents:[MainComponent]  
})
export class AppComponent {
  constructor(  ){
 	}
}
