import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {IntegrationService} from "../../../../../services/integration/integration.service";

export class IntegrationTypeData extends CommonPartnerFormComponent{

  constructor(public integrationService:IntegrationService,public partnerForm:PartnerFormComponent ){
    super();
    this.loadEntityData();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Integration Type";
    this.someExplanation="Identifies how partner will resolve cases";
  }

  loadEntityData() {
    /*this.entitySelected = this.partnerForm.partnerGlobal.partnerConfiguration.billingEntity;*/
    this.integrationService.getIntegrationStatus()
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
