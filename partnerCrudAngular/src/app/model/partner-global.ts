import {Partner} from "./partner";
import {PartnerConfiguration} from "./partner_configuration";
import {Client} from "./client";

export class PartnerGlobal {
    public partner:Partner;
    public partnerConfiguration:PartnerConfiguration;
    public client:Client;

    static buildMe(partner?:Partner) {
        let partnerGlobal : PartnerGlobal = new PartnerGlobal();
        partnerGlobal.partner = (partner!=null)?partner:new Partner;
        partnerGlobal.partnerConfiguration = PartnerConfiguration.initDummy()
        partnerGlobal.client=Client.initDummy();
        return partnerGlobal;
    }

  getBillingEntityKey() {
    return this.partnerConfiguration.fakeBillingEntityKey;
  }
}
