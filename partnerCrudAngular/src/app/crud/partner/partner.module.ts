import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerHomeComponent } from './partner-home.component';
import { PartnerService } from './shared/services/partner.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    PartnerFormComponent,
    PartnerHomeComponent
  ],
  exports: [
    PartnerHomeComponent
  ],
  providers: [
    PartnerService
  ]
})

export class PartnerModule { }

