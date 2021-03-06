import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {PartnerConfiguration} from "../../../../../model/partner_configuration";

export class ClientLevelData extends CommonPartnerFormComponent{

  constructor(public partnerForm:PartnerFormComponent ){
    super();
    this.entitySelected = PartnerConfiguration.initDummy();
  }

  configEntityField() {
    this.isRequired=true;
    this.title="Client level";
    this.someExplanation="If Yes is selected, Client profiles under this partner will have Legal information box on Edit page.";
  }

  loadEntityData() {
    this.entitySelected = this.partnerForm.partnerGlobal.partnerConfiguration;
  }

}
