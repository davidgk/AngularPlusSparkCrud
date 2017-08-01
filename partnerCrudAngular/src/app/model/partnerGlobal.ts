import {Partner} from "./partner";
import {PartnerConfiguration} from "./partner_configuration";

export class PartnerGlobal {
    public partner:Partner;
    public partnerConfiguration:PartnerConfiguration;

    static buildMe(partner?:Partner) {
        let partnerGlobal : PartnerGlobal = new PartnerGlobal();
        partnerGlobal.partner = (partner!=null)?partner:new Partner;
        partnerGlobal.partnerConfiguration = PartnerConfiguration.initDummy()
        return partnerGlobal;
    }

  getBillingEntityKey() {
    return this.partnerConfiguration.fakeBillingEntityKey;
  }
}
