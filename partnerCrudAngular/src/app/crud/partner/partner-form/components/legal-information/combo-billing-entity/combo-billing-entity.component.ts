import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {BillingService} from "../../../../../../services/billing/billing.service";
import {BillingEntitity} from "../../../../../../model/billing_entity";

@Component({
  selector: 'combo-billing-entity',
  templateUrl: './combo-billing-entity.component.html'
})
export class ComboBillingEntityComponent extends CommonFieldFormComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  billingEntities:BillingEntitity[] = [];

  constructor(private billingService: BillingService) {
    super();
    this.isRequired=true;
    this.title="Billing Entity";
    this.someExplanation="Identifies entity responsible for billing invoice";
  }

  ngOnInit() {
    this.billingService.getBillingEntities()
      .subscribe(data => this.billingEntities = data);
  }

}
