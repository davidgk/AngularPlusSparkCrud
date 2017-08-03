import {CommonDomainEntity} from "./common-domain-entity";
import {ContractEntity} from "./contract_entity";
export class Client implements CommonDomainEntity{
    clientKey:number;
    partnerId:number;
    contractEntityKey:number;
    name:string;
    contractEntity:ContractEntity;

  static initDummy() {
    let client:Client = new Client();
    client.clientKey=1;
    client.partnerId=1;
    client.contractEntityKey=1;
    client.contractEntity=ContractEntity.initDummy();
    return client;
  }
}
