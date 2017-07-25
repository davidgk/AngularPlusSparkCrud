import {Component, Input, OnInit} from "@angular/core";
import {Partner} from "../../../../../model/partner";
import {OptionalClientLevelComponent} from "./optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./combo-contract-entity/combo-contract-entity.component";
import {ComboPartnerTypeComponent} from "./combo-partner-type/combo-partner-type.component";
import {ComboBillingEntityComponent} from "./combo-billing-entity/combo-billing-entity.component";
import {PartnerConfiguration} from "../../../../../model/partner_configuration";


@Component({
  selector: 'legal-information',
  templateUrl: './legal-information.component.html',
  entryComponents: [ OptionalClientLevelComponent, ComboContractEntityComponent
    , ComboPartnerTypeComponent, ComboBillingEntityComponent  ]

})
export class LegalInformationComponent implements OnInit {

  @Input()
  public partner:Partner;

  @Input()
  public partnerConfiguration:PartnerConfiguration;


  title ="Legal Information";


  constructor() {

  }

  ngOnInit() {

  }

}
