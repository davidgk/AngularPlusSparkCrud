import { Component, OnInit } from '@angular/core';
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {ContractEntity} from "../../../../../../model/contract_entity";
import {ContractEntitiesService} from "../../../../../../services/contract-entity/contract-entities.service";

@Component({
  selector: 'combo-contract-entity',
  templateUrl: './combo-contract-entity.component.html'
})
export class ComboContractEntityComponent extends CommonFieldFormComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  contractEntities:ContractEntity[] = [];

  constructor(private contractEntityService: ContractEntitiesService) {
    super();
    this.isRequired=true;
    this.title="Contract Entity";
    this.someExplanation="Identifies which Verifi legal entity the partner contract is signed under";
  }

  ngOnInit() {
    this.contractEntityService.getContractors()
      .subscribe(data => this.contractEntities = data);
  }

}

