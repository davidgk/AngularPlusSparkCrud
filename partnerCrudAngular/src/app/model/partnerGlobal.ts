import {Partner} from "./partner";
import {PartnerConfiguration} from "./partner_configuration";

export class PartnerGlobal {
    public partner:Partner;
    public partnerConfiguration:PartnerConfiguration;

    static buildMe() {
        let partnerGlobal : PartnerGlobal = new PartnerGlobal();
        partnerGlobal.partnerConfiguration = new PartnerConfiguration();
        partnerGlobal.partner = new Partner();
        return partnerGlobal;
    }

  getBillingEntityKey() {
    return (<PartnerConfiguration>this.partnerConfiguration).getFakeBillingEntitykey();
  }
}
