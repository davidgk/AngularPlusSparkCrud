///<reference path="components/legal-information/optional-client-level/optional-client-level.component.ts"/>
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
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
import {BillingEntitity} from "../../../model/billing_entity";
import {BillingService} from "../../../services/billing/billing.service";
import {PartnerGlobal} from "../../../model/partnerGlobal";


@Component({
  selector: 'partner-form',
  templateUrl: './partner-form.component.html',
  entryComponents:[OptionalClientLevelComponent, ComboContractEntityComponent
    , ComboPartnerTypeComponent, ComboBillingEntityComponent , ComboBillingStatusComponent , ComboIntegrationStatusComponent  ]
})
export class PartnerFormComponent implements OnInit {

  private selectUndefinedOptionValue:any;
  private partnerForm: FormGroup;
  title: string;
  public titleLegalInformation:string
  public billingEntity_isRequired:boolean;
  public billingEntity_title:string;
  public billingEntity_someExplanation:string;
  public billingEntitySelected:BillingEntitity;
  private billingEntities:BillingEntitity[] = [];
  private partnerGlobal: PartnerGlobal;



  constructor(formBuilder: FormBuilder,    private router: Router,
    private route: ActivatedRoute,    private partnerService: PartnerService,    private billingService: BillingService) {
            this.partnerGlobal = PartnerGlobal.buildMe();
            this.partnerForm =  new FormGroup({
              legalInformation: formBuilder.group({
                billingEntity:[]
              })
            });
          this.configLegalInformation();
          this.loadComponents();
    }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.obtainPartnerFromId(id);
      this.obtainPartnerConfigurationFromId()

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

    result.subscribe(data => this.router.navigate(['partners']));
  }

  private obtainPartnerFromId (id: number) {
    this.partnerService.getPartner(id)
      .subscribe( partner => {
        () => this.initPartnerGlobal();
        ((partner) => {this.partnerGlobal.partner = partner});
        this.title = id ? 'Edit Partner ' + '\"' + this.partnerGlobal.partner.name + '\"' : 'New Partner';
      },response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });

  }

  private initPartnerGlobal() {
    this.partnerGlobal = PartnerGlobal.buildMe();
  }

  loadPartner (partner:any, id: number) {
    this.partnerGlobal.partner = partner;

    this.obtainPartnerConfigurationFromId();
  }

  private obtainPartnerConfigurationFromId () {
    this.partnerService.getPartnerConfiguration(this.partnerGlobal.partner.partner_key)
      .subscribe(
        partnerConfiguration => {
            (partnerConfiguration) => {this.partnerGlobal.partnerConfiguration = <PartnerConfiguration> <any> partnerConfiguration;}
            () => {() => {this.obtainBillingEntity()}}
          },
        response => {
          if (response.status == 404) {
            console.log("Fail Obtaining partnerConfiguration "+ response.message)
            this.router.navigate(['NotFound']);
          }
        });
  }

  private obtainBillingEntity() {
    let partnerConfiguration = this.partnerGlobal.partnerConfiguration;
    this.billingService.getBillingEntityBykey(partnerConfiguration.fakeBillingEntitykey)
      .subscribe(data => {partnerConfiguration.billingEntity = data});
  }




  private loadComponents() {
    this.loadBillingEntity();
  }





  private loadBillingEntity() {
    this.billingService.getBillingEntities()
      .subscribe(data => this.billingEntities = data);
  }

  private configLegalInformation() {
    this.configBillingEntityField();

  }

  private configBillingEntityField() {
    this.titleLegalInformation ="Legal Information"
    this.billingEntity_isRequired=true;
    this.billingEntity_title="Billing Entity";
    this.billingEntity_someExplanation="Identifies entity responsible for billing invoice";

  }
}
