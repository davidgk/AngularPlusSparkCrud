import {BillingEntitity} from "./billing_entity";
import {CommonDomainEntity} from "./common-domain-entity";
export class PartnerConfiguration implements CommonDomainEntity{
  public partnerConfigurationKey:number;
  public partnerKey:number;
  public fakeBillingEntityKey:number;
  public billingEntity:BillingEntitity;
  /*version:number;
  notificationUrl:string;
  requireAcquirerReferenceNumber:number;
  maxAttempts:number;
  attemptsInterval:string;
  active:number;
  canReadPiiDetail:string;
  websiteUrl:string;
  address1:string;
  address2:string;
  city:string;
  state:string;
  zipcode:string;
  country:string;
  contactFirstName:string;
  contactLastName:string;
  contactPhone:string;
  contactEmail:string;
  supportUrl:string;
  supportPhone:string;
  supportEmail:string;
  autoCloseCases:string;
  cascadeDisableDescriptors:string;
  updated:string;
  created:string;
  clientAutoClosed:string;
  enableInvoiceCreditNotifications:string;
  ignoreSixMonthDisableDeleteRule:string;
  contractEntityKey:number;
  partnerStatusKey:number;
  partnerTypeKey:number;
  billingPartnerId:string;*/
  isClientLevelContractEntity:boolean;


  static initDummy() {
    let partnerConf: PartnerConfiguration = new PartnerConfiguration();
    let dummy:BillingEntitity = new BillingEntitity();
    dummy.key =0;
    dummy.fakeBillingEntityName="----Select-----"
    partnerConf.billingEntity = dummy;
    return partnerConf;

  }
}
