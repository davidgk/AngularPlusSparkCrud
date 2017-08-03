import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {PartnerService} from "../../../../../services/partner/partner.service";
import {PartnerType} from "../../../../../model/partner-type";

export class PartnerTypeData extends CommonPartnerFormComponent{

  constructor(public partnerService:PartnerService,public formComponent:PartnerFormComponent ){
    super();
    this.loadInformationFromCombo();
    this.entitySelected = PartnerType.initDummy();

  }

  configEntityField() {
    this.isRequired=true;
    this.title="Partner Type";
    this.someExplanation="Identifies this partners relationship with Verifi.";
  }


  loadEntityData() {
    this.entitySelected = this.formComponent.partnerGlobal.partnerConfiguration.partnerType;
  }

  loadInformationFromCombo() {
    this.partnerService.getPartnersTypes()
      .subscribe(data => this.entitiesForCombo = data);
  }

  completeEntityCombo(){
    let key = this.formComponent.partnerGlobal.getPartnerTypeKey();
    let self:PartnerTypeData = this;
    this.partnerService.getPartnersTypeBykey(key).subscribe(
      data => {
        self.formComponent.partnerGlobal.partnerConfiguration.partnerType = data;
        self.loadEntityData();
      }, response => {
        if (response.status == 404) {
          this.formComponent.router.navigate(['NotFound']);
        }
      });
  }








}
