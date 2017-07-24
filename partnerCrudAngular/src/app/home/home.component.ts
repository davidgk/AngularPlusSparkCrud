import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core";
import {FieldWithOptionalComponent} from "../crud/partner/partner-form/components/commons/field-with-optional/field-with-optional.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(private _logger: Logger ){
 		console.log("Grande Dani!");

 	}

  ngOnInit() {
  }

}
