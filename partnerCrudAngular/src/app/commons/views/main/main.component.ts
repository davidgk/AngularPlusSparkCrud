import { Component, OnInit } from '@angular/core';
import { NavigatorComponent } from "app/commons/views/navigator/navigator.component";
import {FieldWithOptionalComponent} from "../../../crud/partner/partner-form/components/commons/field-with-optional/field-with-optional.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  entryComponents:[NavigatorComponent, FieldWithOptionalComponent]
})
export class MainComponent implements OnInit {
  title = 'Partner CRUD by Davidgk';
  constructor() { }

  ngOnInit() {
  }

}
