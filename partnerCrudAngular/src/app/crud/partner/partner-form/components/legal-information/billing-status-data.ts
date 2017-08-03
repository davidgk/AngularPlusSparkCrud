import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";

export class BillingStatusData extends CommonPartnerFormComponent{

  constructor(public billingService:BillingService,public partnerForm:PartnerFormComponent ){
    super();
    this.loadEntityData();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Billing Status";
    this.someExplanation="Identifies partner status with Verifi";
  }

  loadEntityData() {
    /*this.entitySelected = this.partnerForm.partnerGlobal.partnerConfiguration.billingEntity;*/
    this.billingService.getBillingStatus()
      .subscribe(data => this.entitiesForCombo = data);
  }


  completeEntityCombo() {
      /*let billingEntityKey = formComponent.partnerGlobal.getBillingEntityKey();
      this.billingService.getBillingEntityByKey(billingEntityKey).subscribe(
        data => {
          formComponent.partnerGlobal.partnerConfiguration.billingEntity = data;
          this.entitySelected = data;
        }, response => {
          if (response.status == 404) {
            formComponent.router.navigate(['NotFound']);
          }
        });*/
  }

}
