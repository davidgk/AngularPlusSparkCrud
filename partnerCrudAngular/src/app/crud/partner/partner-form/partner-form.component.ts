import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PartnerService} from "../../../services/partner/partner.service";
import {PartnerConfiguration} from "../../../model/partner_configuration";
import {OptionalClientLevelComponent} from "./components/legal-information/optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./components/legal-information/combo-contract-entity/combo-contract-entity.component";
import {ComboPartnerTypeComponent} from "./components/legal-information/combo-partner-type/combo-partner-type.component";
import {ComboBillingEntityComponent} from "./components/legal-information/combo-billing-entity/combo-billing-entity.component";
import {BillingEntityData} from "./components/legal-information/combo-billing-entity/billing-entity-data";
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
  public billingEntityData: BillingEntityData;
  private partnerForm: FormGroup;
  title: string;
  public titleLegalInformation:string
  public partnerGlobal: PartnerGlobal;


  constructor(formBuilder: FormBuilder,    public router: Router,
    private route: ActivatedRoute,    private partnerService: PartnerService,
    private billingService: BillingService) {
      this.partnerGlobal = PartnerGlobal.buildMe();
      this.billingEntityData = new BillingEntityData(billingService, this);
      this.partnerForm = formBuilder.group({
        billingEntity: ['', [
          Validators.required
        ]]
      });
      this.configLegalInformation();
    }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      var id = params['id'];
      if (!id)
        return;
      this.obtainPartnerFromId(id);
    });
  }

  private obtainPartnerFromId (id: number) {
    this.partnerService.getPartner(id)
      .subscribe( partner => {
        this.configPartner(partner, id);
      },response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
      });
  }

  private configPartner(partner, id: number) {
    this.partnerGlobal.partner = partner;
    this.title = id ? 'Edit Partner ' + '\"' + this.partnerGlobal.partner.name + '\"' : 'New Partner';
    this.obtainPartnerConfigurationFromId();
  }

  private obtainPartnerConfigurationFromId () {
    let partner= this.partnerGlobal.partner;
    this.partnerService.getPartnerConfiguration(partner.partner_key)
      .subscribe(data => {
          this.loadPartnerConfiguration(data, this);
        },response => {
        if (response.status == 404) {
          this.router.navigate(['NotFound']);
        }
      });
   }

  loadPartnerConfiguration(partnerConfiguration: PartnerConfiguration, formComponent:PartnerFormComponent) {
    formComponent.partnerGlobal.partnerConfiguration = partnerConfiguration;
    this.billingEntityData.completeBillingEntityCombo(formComponent);
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

  private configLegalInformation() {
    this.titleLegalInformation ="Legal Information"
    this.billingEntityData.configBillingEntityField();

  }


}
