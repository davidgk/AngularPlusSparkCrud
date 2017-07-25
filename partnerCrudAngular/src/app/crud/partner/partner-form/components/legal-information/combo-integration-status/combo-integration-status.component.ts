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
  integrationTypes:IntegrationStatus[] = [];

  constructor(private integrationService: IntegrationService) {
    super();
    this.isRequired=true;
    this.title="Integration Type";
    this.someExplanation="Identifies how partner will resolve cases";
  }

  ngOnInit() {
    this.integrationService.getIntegrationStatus()
      .subscribe(data => this.integrationTypes = data);
  }

}
