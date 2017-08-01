import {BillingService} from "../../../../../../services/billing/billing.service";
import {PartnerFormComponent} from "../../../partner-form.component";

export class BillingEntityData{

  constructor(public billingService:BillingService,public partnerForm:PartnerFormComponent ){

  }
}
