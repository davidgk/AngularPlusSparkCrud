import {Component, Input, OnInit} from "@angular/core";
import {Partner} from "../../../shared/model/partner";
import {FieldWithOptionalComponent} from "../commons/field-with-optional/field-with-optional.component";


@Component({
  selector: 'legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.css'],
  entryComponents: [FieldWithOptionalComponent]

})
export class LegalInformationComponent implements OnInit {

  @Input()
  public partner:Partner;

  title ="Legal Information";


  constructor() {

  }

  ngOnInit() {

  }

}
