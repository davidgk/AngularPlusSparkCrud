import { Component, OnInit, Input } from '@angular/core';
import {CommonPartnerFormComponent} from "../../common-partner-form-component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'optional-client-level',
  templateUrl: './optional-client-level.component.html'
})
export class OptionalClientLevelComponent  extends CommonPartnerFormComponent implements OnInit {

  @Input()
  public formGroup: FormGroup;

  constructor() {
    super();
    this.isRequired=true;
    this.title="Client level";
    this.someExplanation="If Yes is selected, Client profiles under this partner will have Legal information box on Edit page.";
  }

  ngOnInit() {
    console.log(this.partnerConfiguration.isClientLevelContractEntity)
  }

}
