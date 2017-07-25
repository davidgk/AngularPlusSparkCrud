import {Component, Input, OnInit} from "@angular/core";
import {Partner} from "../../../../../model/partner";
import {OptionalClientLevelComponent} from "./optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./combo-contract-entity/combo-contract-entity.component";
import {ComboPartnerTypeComponent} from "./combo-partner-type/combo-partner-type.component";
import {ComboBillingEntityComponent} from "./combo-billing-entity/combo-billing-entity.component";


@Component({
  selector: 'legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.css'],
  entryComponents: [ OptionalClientLevelComponent, ComboContractEntityComponent
    , ComboPartnerTypeComponent, ComboBillingEntityComponent  ]

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
