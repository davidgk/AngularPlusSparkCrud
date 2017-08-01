export class BillingEntitity {
  key:number;
  fakeBillingEntityName:string;

  static initDummy() {
    let dummy:BillingEntitity = new BillingEntitity();
    dummy.key =1;
    dummy.fakeBillingEntityName="----Select-----"
    return dummy;
  }
}
