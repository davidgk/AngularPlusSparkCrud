import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl,FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {Partner} from "../../../model/partner";
import {PartnerService} from "../../../services/partner/partner.service";
import {LegalInformationComponent} from "./components/legal-information/legal-information.component";
import {PartnerConfiguration} from "../../../model/partner_configuration";



@Component({
  selector: 'partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css'],
  entryComponents:[LegalInformationComponent]
})
export class PartnerFormComponent implements OnInit {


  private partnerForm: FormGroup;
  title: string;
  partner: Partner = new Partner();
  partnerConfiguration: PartnerConfiguration = new PartnerConfiguration();

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private partnerService: PartnerService
  ) {  }



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
