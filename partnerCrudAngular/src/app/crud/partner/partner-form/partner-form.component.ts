import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PartnerService} from "../../../services/partner/partner.service";
import {PartnerConfiguration} from "../../../model/partner_configuration";
import {BillingEntityData} from "./components/legal-information/billing-entity-data";

import {BillingService} from "../../../services/billing/billing.service";
import {PartnerGlobal} from "../../../model/partner-global";
import {PartnerTypeData} from "./components/legal-information/partner-type-data";
import {ClientLevelData} from "./components/legal-information/client-level-data";
import {PartnerStatusData} from "./components/legal-information/partner-status-data";
import {ContractEntityData} from "./components/legal-information/contract-entity-data";
import {IntegrationTypeData} from "./components/legal-information/integration-type-data";
import {ContractEntitiesService} from "../../../services/contract-entity/contract-entities.service";
import {IntegrationService} from "../../../services/integration/integration.service";


@Component({
  selector: 'partner-form',
  templateUrl: './partner-form.component.html',
  entryComponents:[]
})
export class PartnerFormComponent implements OnInit {


  public billingEntityData: BillingEntityData;
  public partnerStatusData: PartnerStatusData;
  public contractEntityData: ContractEntityData;
  public integrationTypeData: IntegrationTypeData;
  public clientLevelData: ClientLevelData;
  public partnerTypeData: PartnerTypeData;


  title: string;
  private partnerForm: FormGroup;
  public titleLegalInformation:string
  public partnerGlobal: PartnerGlobal;


  constructor(formBuilder: FormBuilder,    public router: Router,
    private route: ActivatedRoute,
    private partnerService: PartnerService,
    private contractEntitiesService: ContractEntitiesService,
    private integrationService: IntegrationService,
    private billingService: BillingService, ) {
      this.initDataComponents();
      this.partnerForm = formBuilder.group({
        billingEntity: ['', [Validators.required]]
        //, billingEntity: ['', [Validators.required]]
      });
      this.configLegalInformation();
    }

  private initDataComponents() {
    this.partnerGlobal = PartnerGlobal.buildMe();
    this.clientLevelData = new ClientLevelData( this);
    this.contractEntityData= new ContractEntityData(this.contractEntitiesService,  this);
    this.billingEntityData = new BillingEntityData(this.billingService, this);
    this.partnerTypeData = new PartnerTypeData(this.partnerService, this);
    this.partnerStatusData = new PartnerStatusData(this.partnerService, this);
    /*
    this.integrationTypeData= new IntegrationTypeData(this.integrationService,  this);*/
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
          this.loadPartnerConfiguration(data);
        },response => {
        if (response.status == 404) {
          this.router.navigate(['NotFound']);
        }
      });
   }

  loadPartnerConfiguration(partnerConfiguration: PartnerConfiguration) {
    this.partnerGlobal.partnerConfiguration = partnerConfiguration;
    this.clientLevelData.loadEntityData()
    this.contractEntityData.completeEntityCombo();
    this.billingEntityData.completeEntityCombo();
    this.partnerTypeData.completeEntityCombo();
    this.partnerStatusData.completeEntityCombo();
    /*
    this.integrationTypeData.completeEntityCombo();*/
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
    this.clientLevelData.configEntityField();
    this.contractEntityData.configEntityField();
    this.billingEntityData.configEntityField();
    this.partnerTypeData.configEntityField();
    this.partnerStatusData.configEntityField();
    /*
    this.integrationTypeData.configEntityField();*/
    console.log("end Loading things");

  }


}
