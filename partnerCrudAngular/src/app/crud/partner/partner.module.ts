import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ComboBoxModule} from "ng2-combobox";

import {PartnerFormComponent} from "./partner-form/partner-form.component";
import {PartnerHomeComponent} from "./partner-home.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    ComboBoxModule
  ],
  declarations: [
    PartnerFormComponent,
    PartnerHomeComponent
  ],
  exports: [
    PartnerHomeComponent
  ]

})

export class PartnerModule { }

