import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {BillingEntity} from "../../../../../model/billing_entity";

export class BillingEntityData extends CommonPartnerFormComponent{



  constructor(public billingService:BillingService,public formComponent:PartnerFormComponent ){
    super();
    this.loadInformationFromCombo();
    this.entitySelected = BillingEntity.initDummy();

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

  completeEntityCombo(){
      let billingEntityKey = this.formComponent.partnerGlobal.getBillingEntityKey();
      let self:BillingEntityData = this;
      this.billingService.getBillingEntityByKey(billingEntityKey).subscribe(
        data => {
            self.formComponent.partnerGlobal.partnerConfiguration.billingEntity = data;
            self.loadEntityData();
        }, response => {
          if (response.status == 404) {
            this.formComponent.router.navigate(['NotFound']);
          }
        });
  }

}
