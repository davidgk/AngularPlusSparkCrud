import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {IntegrationStatus} from "../../../../../../model/integration_status";
import {IntegrationService} from "../../../../../../services/integration/integration.service";

@Component({
  selector: 'combo-integration-status',
  templateUrl: './combo-integration-status.component.html'
})
export class ComboIntegrationStatusComponent extends CommonFieldFormComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  integrationStatus:IntegrationStatus[] = [];

  constructor(private integrationService: IntegrationService) {
    super();
    this.isRequired=true;
    this.title="Contract Entity";
    this.someExplanation="Identifies which Verifi legal entity the partner contract is signed under";
  }

  ngOnInit() {
    this.integrationService.getintegrationStatus()
      .subscribe(data => this.integrationStatus = data);
  }

}
