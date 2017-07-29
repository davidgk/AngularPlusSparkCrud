import {Component, Input, OnInit} from "@angular/core";
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {BillingService} from "../../../../../../services/billing/billing.service";
import {BillingEntitity} from "../../../../../../model/billing_entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'combo-billing-entity',
  templateUrl: './combo-billing-entity.component.html'
})
export class ComboBillingEntityComponent extends CommonFieldFormComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  billingEntities:BillingEntitity[] = [];

  @Input()
  private formGroup:FormGroup;


  constructor(private billingService: BillingService, private formBuilder:FormBuilder)
 {
   super();
   this.isRequired=true;
   this.title="Billing Entity";
   this.someExplanation="Identifies entity responsible for billing invoice";
   this.formGroup = this.formBuilder.group({
      billingEntity :['', Validators.required]
    });
  }



  ngOnInit() {

    this.billingService.getBillingEntities()
      .subscribe(data => this.billingEntities = data);
  }

}
