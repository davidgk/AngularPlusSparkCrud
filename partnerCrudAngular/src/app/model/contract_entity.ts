import {CommonDomainEntity} from "./common-domain-entity";
export class ContractEntity implements CommonDomainEntity{
    contractEntityKey:number;
    name:string;

  static initDummy() {
    let contractEntity:ContractEntity= new ContractEntity();
    contractEntity.contractEntityKey = 1;
    contractEntity.name= "Contract Entity Dummy";
    return contractEntity;
  }
}
