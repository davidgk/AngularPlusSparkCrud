import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";

export class BillingEntityData extends CommonPartnerFormComponent{

  constructor(public billingService:BillingService,public formComponent:PartnerFormComponent ){
    super();
    this.loadInformationFromCombo();
  }

  configEntityField() {
      this.isRequired=true;
      this.title="Billing Entity";
      this.someExplanation="Identifies entity responsible for billing invoice";
  }

  loadEntityData() {
    this.entitySelected = this.formComponent.partnerGlobal.partnerConfiguration.billingEntity;
  }

  loadInformationFromCombo() {
    this.billingService.getBillingEntities()
      .subscribe(data => this.entitiesForCombo = data);
  }

  completeBillingEntityCombo() {
      let billingEntityKey = this.formComponent.partnerGlobal.getBillingEntityKey();
      this.billingService.getBillingEntityByKey(billingEntityKey).subscribe(
        data => {
          this.formComponent.partnerGlobal.partnerConfiguration.billingEntity = data;
          this.loadEntityData();
        }, response => {
          if (response.status == 404) {
            this.formComponent.router.navigate(['NotFound']);
          }
        });
  }

}
