import {Partner} from "../../shared/model/partner";
import {Input} from "@angular/core";
export abstract class CommonFieldFormComponent {

  @Input()
  partner:Partner;

}
