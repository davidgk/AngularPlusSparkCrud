import {CommonDomainEntity} from "./common-domain-entity";
export class BillingEntitity implements CommonDomainEntity{
  key:number;
  fakeBillingEntityName:string;

  static initDummy() {
    let dummy:BillingEntitity = new BillingEntitity();
    dummy.key =1;
    dummy.fakeBillingEntityName="----Select-----"
    return dummy;
  }
}
