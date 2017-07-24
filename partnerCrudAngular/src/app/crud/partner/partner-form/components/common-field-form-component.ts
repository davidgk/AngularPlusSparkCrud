import {Partner} from "../../../../model/partner";
import {Input} from "@angular/core";
export abstract class CommonFieldFormComponent {
  @Input()
  public partner:Partner;

  title:string;

  isRequired:boolean;

  someExplanation:string;
}
