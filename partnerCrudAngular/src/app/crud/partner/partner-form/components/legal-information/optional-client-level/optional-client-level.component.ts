import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";

@Component({
  selector: 'optional-client-level',
  templateUrl: './optional-client-level.component.html'
})
export class OptionalClientLevelComponent  extends CommonFieldFormComponent implements OnInit {

  constructor() {
    super();
    this.isRequired=true;
    this.title="Client level";
    this.someExplanation="If Yes is selected, Client profiles under this partner will have Legal information box on Edit page.";
  }

  ngOnInit() {
  }

}
