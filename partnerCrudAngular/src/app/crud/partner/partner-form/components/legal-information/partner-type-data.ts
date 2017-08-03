import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {PartnerService} from "../../../../../services/partner/partner.service";

export class PartnerTypeData extends CommonPartnerFormComponent{

  constructor(public partnerService:PartnerService,public formComponent:PartnerFormComponent ){
    super();
    this.loadEntityData();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Partner Type";
    this.someExplanation="Identifies this partners relationship with Verifi.";
  }

  loadEntityData() {
    /*this.entitySelected = this.formComponent.partnerGlobal.partnerConfiguration.billingEntity;*/
    this.partnerService.getPartnersTypes()
      .subscribe(data => this.entitiesForCombo = data);
  }



  completeEntityCombo() {
     /* let billingEntityKey = formComponent.partnerGlobal.getBillingEntityKey();
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
