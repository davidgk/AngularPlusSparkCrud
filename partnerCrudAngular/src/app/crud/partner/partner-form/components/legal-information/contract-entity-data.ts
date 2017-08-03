import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {ContractEntitiesService} from "../../../../../services/contract-entity/contract-entities.service";
import {ContractEntity} from "../../../../../model/contract_entity";

export class ContractEntityData extends CommonPartnerFormComponent{

  constructor(public contractEntityService: ContractEntitiesService,public formComponent:PartnerFormComponent ){
    super();
    this.loadInformationFromCombo();
    this.entitySelected = ContractEntity.initDummy();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Contract Entity";
    this.someExplanation="Identifies which Verifi legal entity the partner contract is signed under";
  }

  loadEntityData() {
    this.entitySelected = this.formComponent.partnerGlobal.partnerConfiguration.billingEntity;
  }

  loadInformationFromCombo() {
    this.contractEntityService.getContractors()
      .subscribe(data => this.entitiesForCombo = data);
  }

  completeEntityCombo(){
    let key = this.formComponent.partnerGlobal.getBillingEntityKey();
    let self:ContractEntityData = this;
    this.contractEntityService.getContractEntityByPartnerId(key).subscribe(
      data => {
        self.formComponent.partnerGlobal.client.contractEntity = data;
        self.entitySelected = data;
      }, response => {
        if (response.status == 404) {
          self.formComponent.router.navigate(['NotFound']);
        }
      });
  }

}
