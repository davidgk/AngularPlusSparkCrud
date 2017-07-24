import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";

@Component({
  selector: 'field-with-combo',
  templateUrl: './field-with-combo.component.html'
})
export class FieldWithComboComponent extends CommonFieldFormComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
