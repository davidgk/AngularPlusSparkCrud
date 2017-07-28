import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'persona-form-reactive',
  templateUrl: './persona-form-reactive.component.html',
  styleUrls: ['./persona-form-reactive.component.css']
})
export class PersonaFormReactiveComponent implements OnInit {


  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      quantity: this.fb.control(123)
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm);
  }
}



