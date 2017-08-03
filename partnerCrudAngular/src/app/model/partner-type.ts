import {CommonDomainEntity} from "./common-domain-entity";
export class PartnerType implements CommonDomainEntity{
  name:string;
  partnerTypeKey:number;
  updated:string;
  created:string;

  static initDummy(){
     let dummy:PartnerType= new PartnerType();
     dummy.partnerTypeKey =1;
     dummy.name ="Partner Type Dummy";
     return dummy;
  }
}
