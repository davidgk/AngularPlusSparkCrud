import { Component, OnInit } from '@angular/core';
import { NavigatorComponent } from "app/commons/views/navigator/navigator.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  entryComponents:[NavigatorComponent]  
})
export class MainComponent implements OnInit {
  title = 'Partner by Davidgk';
  constructor() { }

  ngOnInit() {
  }

}
