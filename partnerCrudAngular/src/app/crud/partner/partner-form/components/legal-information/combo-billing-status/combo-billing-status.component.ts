import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {BillingStatus} from "../../../../../../model/billing_status";
import {BillingService} from "../../../../../../services/billing/billing.service";


@Component({
  selector: 'combo-billing-status',
  templateUrl: './combo-billing-status.component.html'
})
export class ComboBillingStatusComponent extends CommonFieldFormComponent implements OnInit {
private selectUndefinedOptionValue:any;
  billingStatus:BillingStatus[] = [];

  constructor(private billingStatusService: BillingService) {
    super();
    this.isRequired=true;
    this.title="Billing Status";
    this.someExplanation="Identifies partner status with Verifi";
  }

  ngOnInit() {
    this.billingStatusService.getBillingStatus()
      .subscribe(data => this.billingStatus = data);
  }

}
