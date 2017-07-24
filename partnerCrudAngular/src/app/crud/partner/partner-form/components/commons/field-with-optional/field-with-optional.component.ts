import { Component, OnInit, Input } from '@angular/core';
import {Partner} from "../../../../shared/model/partner";

@Component({
  selector: 'field-with-optional',
  templateUrl: './field-with-optional.component.html',
  styleUrls: ['./field-with-optional.component.css']
})
export class FieldWithOptionalComponent implements OnInit {

  @Input()
  public partner:Partner;

  @Input()
  title:string;

  @Input()
  isRequired:boolean;

  @Input()
  someExplanation:string;

  constructor() { }

  ngOnInit() {
  }

}
