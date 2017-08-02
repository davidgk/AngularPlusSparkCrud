import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {ContractEntitiesService} from "../../../../../services/contract-entity/contract-entities.service";

export class ContractEntityData extends CommonPartnerFormComponent{

  constructor(public contractEntityService: ContractEntitiesService,public partnerForm:PartnerFormComponent ){
    super();
    this.loadEntityData();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Contract Entity";
    this.someExplanation="Identifies which Verifi legal entity the partner contract is signed under";
  }

  loadEntityData() {
    /*this.entitySelected = this.partnerForm.partnerGlobal.partnerConfiguration.billingEntity;*/
    this.contractEntityService.getContractors()
      .subscribe(data => this.entitiesForCombo = data);
  }


  completeBillingEntityCombo() {
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
