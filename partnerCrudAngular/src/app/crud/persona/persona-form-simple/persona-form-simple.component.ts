import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'persona-form-simple',
  templateUrl: './persona-form-simple.component.html',
  styleUrls: ['./persona-form-simple.component.css']
})
export class PersonaFormSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form: FormGroup) {
    console.log("Template-driven form submitted: ", form);
  }
}
