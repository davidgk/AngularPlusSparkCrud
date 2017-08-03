import {BillingService} from "../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../partner-form.component";
import {CommonPartnerFormComponent} from "../common-partner-form-component";
import {PartnerService} from "../../../../../services/partner/partner.service";
import {PartnerStatus} from "../../../../../model/partner_status";

export class PartnerStatusData extends CommonPartnerFormComponent{

  constructor(public partnerService:PartnerService,public formComponent:PartnerFormComponent ){
    super();
    this.loadInformationFromCombo();
    this.entitySelected =PartnerStatus.initDummy();
  }


  configEntityField() {
    this.isRequired=true;
    this.title="Billing Status";
    this.someExplanation="Identifies partner status with Verifi";
  }


  loadEntityData() {
    this.entitySelected = this.formComponent.partnerGlobal.partnerConfiguration.partnerStatus;
  }

  loadInformationFromCombo() {
    this.partnerService.getAllPartnerStatus()
      .subscribe(data => this.entitiesForCombo = data);
  }

  completeEntityCombo(){
    let key = this.formComponent.partnerGlobal.getPartnerStatusKey();
    let self:PartnerStatusData = this;
    this.partnerService.getPartnerStatusByKey(key).subscribe(
      data => {
        self.formComponent.partnerGlobal.partnerConfiguration.partnerStatus = data;
        self.loadEntityData();
      }, response => {
        if (response.status == 404) {
          self.formComponent.router.navigate(['NotFound']);
        }
      });
  }


}
