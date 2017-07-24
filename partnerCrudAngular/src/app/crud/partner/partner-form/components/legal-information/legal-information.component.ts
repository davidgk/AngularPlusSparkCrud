import {Component, Input, OnInit} from "@angular/core";
import {Partner} from "../../../../../model/partner";
import {OptionalClientLevelComponent} from "./optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./combo-contract-entity/combo-contract-entity.component";


@Component({
  selector: 'legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.css'],
  entryComponents: [ OptionalClientLevelComponent, ComboContractEntityComponent]

})
export class LegalInformationComponent implements OnInit {

  @Input()
  public partner:Partner;

  title ="Legal Information";


  constructor() {

  }

  ngOnInit() {

  }

}
