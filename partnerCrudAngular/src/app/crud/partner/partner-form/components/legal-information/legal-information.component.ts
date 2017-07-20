import {Component, Input, OnInit} from "@angular/core";
import {Partner} from "../../../shared/model/partner";

@Component({
  selector: 'legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.css']
})


export class LegalInformationComponent implements OnInit {

  @Input()
  partner:Partner;
  title ="Legal Information";


  constructor() {

  }

  ngOnInit() {

  }

}
