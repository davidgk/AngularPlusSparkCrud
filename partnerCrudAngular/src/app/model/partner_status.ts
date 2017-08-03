import {CommonDomainEntity} from "./common-domain-entity";
export class PartnerStatus  implements CommonDomainEntity{
  partnerStatusKey:number;
  name:string;

  static initDummy(){
    let ps:PartnerStatus = new PartnerStatus();
    ps.name="enabledd"
    ps.partnerStatusKey = 1;
    return ps;
  }
}
