import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Partner } from '../shared/model/partner';
import { PartnerService } from '../shared/services/partner.service';
import { BasicValidators } from '../shared/validators/basic-validator';

@Component({
  selector: 'partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  partner: Partner = new Partner();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private partnerService: PartnerService
  ) {
    this.form = formBuilder.group({
      name: ['', [ Validators.required,Validators.minLength(3)]],
      status: ['', [ Validators.required /*,BasicValidators.email*/]]
      /*,phone: []/*,
      address: formBuilder.group({
        street: ['', Validators.minLength(3)],
        suite: [],
        city: ['', Validators.maxLength(30)],
        zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
      })*/
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Partner' : 'New Partner';

      if (!id)
        return;

      this.partnerService.getPartner(id)
        .subscribe(
          partner => this.partner = partner,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
      partnerValue = this.form.value;

    if (partnerValue.id){
      result = this.partnerService.updateParrner(partnerValue);
    } else {
      result = this.partnerService.addPartner(partnerValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }

}
