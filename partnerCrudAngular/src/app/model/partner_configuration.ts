import {BillingEntity} from "./billing_entity";
import {CommonDomainEntity} from "./common-domain-entity";
import {PartnerType} from "./partner-type";
import {PartnerStatus} from "./partner_status";
export class PartnerConfiguration implements CommonDomainEntity{
  public partnerConfigurationKey:number;
  public partnerTypeKey:number;
  public partnerStatusKey:number;
  public partnerKey:number;
  public fakeBillingEntityKey:number;
  public billingEntity:BillingEntity;
  public partnerType:PartnerType;
  partnerStatus: PartnerStatus;
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
    partnerConf.partnerConfigurationKey =0;
    partnerConf.fakeBillingEntityKey =2;
    partnerConf.partnerTypeKey =2;
    partnerConf.billingEntity = BillingEntity.initDummy();
    partnerConf.partnerType= PartnerType.initDummy();
    partnerConf.partnerStatus= PartnerStatus.initDummy();
    return partnerConf;

  }
}
