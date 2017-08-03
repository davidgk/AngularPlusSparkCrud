import {CommonDomainEntity} from "./common-domain-entity";
export class BillingEntity implements CommonDomainEntity{
  key:number;
  fakeBillingEntityName:string;

  static initDummy() {
    let dummy:BillingEntity = new BillingEntity();
    dummy.key =1;
    dummy.fakeBillingEntityName="----Select-----"
    return dummy;
  }
}
