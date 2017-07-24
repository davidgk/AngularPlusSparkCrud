import {Component, OnInit} from "@angular/core";
import {CommonFieldFormComponent} from "../../common-field-form-component";
import {PartnerService} from "../../../../../../services/partner/partner.service";
import {PartnerType} from "../../../../../../model/partner-type";

@Component({
  selector: 'combo-partner-type',
  templateUrl: './combo-partner-type.component.html'
})
export class ComboPartnerTypeComponent extends CommonFieldFormComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  partnerTypes:PartnerType[] = [];

  constructor(private partnerService: PartnerService) {
    super();
    this.isRequired=true;
    this.title="Contract Entity";
    this.someExplanation="Identifies which Verifi legal entity the partner contract is signed under";
  }

  ngOnInit() {
    this.partnerService.getpartnersTypes()
      .subscribe(data => this.partnerTypes = data);
  }

}
