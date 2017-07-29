///<reference path="components/legal-information/optional-client-level/optional-client-level.component.ts"/>
import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {Partner} from "../../../model/partner";
import {PartnerService} from "../../../services/partner/partner.service";
import {PartnerConfiguration} from "../../../model/partner_configuration";
import {OptionalClientLevelComponent} from "./components/legal-information/optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./components/legal-information/combo-contract-entity/combo-contract-entity.component";
import {ComboPartnerTypeComponent} from "./components/legal-information/combo-partner-type/combo-partner-type.component";
import {ComboBillingEntityComponent} from "./components/legal-information/combo-billing-entity/combo-billing-entity.component";
import {ComboBillingStatusComponent} from "./components/legal-information/combo-billing-status/combo-billing-status.component";
import {ComboIntegrationStatusComponent} from "./components/legal-information/combo-integration-status/combo-integration-status.component";


@Component({
  selector: 'partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
  entryComponents:[OptionalClientLevelComponent, ComboContractEntityComponent
    , ComboPartnerTypeComponent, ComboBillingEntityComponent , ComboBillingStatusComponent , ComboIntegrationStatusComponent  ]
})
export class PartnerFormComponent implements OnInit {


  private partnerForm: FormGroup;
  title: string;
  titleLegalInformation:string
  partner: Partner = new Partner();
  partnerConfiguration: PartnerConfiguration = new PartnerConfiguration();

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private partnerService: PartnerService
  ) {
    this.titleLegalInformation ="Legal Information"
  }



  ngOnInit() {
    this.partnerForm =  new FormGroup({
      billingEntity: new FormControl()
    });

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.obtainPartnerFromId(id);

    });
  }

  save() {
    var result,
      partnerValue = this.partnerForm.value;

    if (partnerValue.id){
      result = this.partnerService.updatePartner(partnerValue);
    } else {
      result = this.partnerService.addPartner(partnerValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }

  private obtainPartnerFromId(id: number) {
    this.partnerService.getPartner(id)
      .subscribe(
        partner => {
          this.partner = partner;
          this.title = id ? 'Edit Partner ' + '\"' + this.partner.name + '\"' : 'New Partner';
          this.obtainPartnerConfigurationFromId(partner.partner_key);
        },
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });

  }

  private obtainPartnerConfigurationFromId(key: number) {
    this.partnerService.getPartnerConfiguration(key)
      .subscribe(
        partnerConfiguration => {
          this.partnerConfiguration = partnerConfiguration;
        },
        response => {
          if (response.status == 404) {
            console.log("Fail Obtaining partnerConfiguration "+ response.message)
            this.router.navigate(['NotFound']);
          }
        });
  }
}
