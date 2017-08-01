import {BillingService} from "../../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../../partner-form.component";
import {BillingEntitity} from "../../../../../../model/billing_entity";

export class BillingEntityData{
  public isRequired:boolean;
  public billingEntitySelected:BillingEntitity;
  public title:string;
  public someExplanation:string;
  public billingEntities:BillingEntitity[] = [];


  constructor(public billingService:BillingService,public partnerForm:PartnerFormComponent ){
    this.billingEntitySelected = partnerForm.partnerGlobal.partnerConfiguration.billingEntity;
    this.loadBillingEntity();
  }

  configBillingEntityField() {
      this.isRequired=true;
      this.title="Billing Entity";
      this.someExplanation="Identifies entity responsible for billing invoice";
  }

  loadBillingEntity() {
    this.billingService.getBillingEntities()
      .subscribe(data => this.billingEntities = data);
  }

  completeBillingEntityCombo(formComponent: PartnerFormComponent) {
      let billingEntityKey = formComponent.partnerGlobal.getBillingEntityKey();
      this.billingService.getBillingEntityByKey(billingEntityKey).subscribe(
        data => {
          formComponent.partnerGlobal.partnerConfiguration.billingEntity = data;
          formComponent.billingEntityData.billingEntitySelected = data;
        }, response => {
          if (response.status == 404) {
            formComponent.router.navigate(['NotFound']);
          }
        });
  }

}
