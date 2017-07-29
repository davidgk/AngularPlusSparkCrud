import {Partner} from "../../../../model/partner";
import {Input} from "@angular/core";
import {PartnerConfiguration} from "../../../../model/partner_configuration";
export abstract class CommonPartnerFormComponent {
  @Input()
  public partner:Partner;

  @Input()
  public partnerConfiguration:PartnerConfiguration;

  title:string;

  isRequired:boolean;

  someExplanation:string;
}
