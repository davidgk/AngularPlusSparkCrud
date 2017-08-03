import {CommonDomainEntity} from "../../../../model/common-domain-entity";

export abstract class CommonPartnerFormComponent {
  public selectUndefinedOptionValue:any;

  public entitySelected:CommonDomainEntity;
  public entitiesForCombo:CommonDomainEntity[] = [];

  abstract loadEntityData();

  abstract configEntityField();

  public title:string;

  public isRequired:boolean;

  public someExplanation:string;


}
