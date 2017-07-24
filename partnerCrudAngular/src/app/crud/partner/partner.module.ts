import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {PartnerFormComponent} from "./partner-form/partner-form.component";
import {PartnerHomeComponent} from "./partner-home.component";
import {PartnerService} from "./shared/services/partner.service";
import {LegalInformationComponent} from "./partner-form/components/legal-information/legal-information.component";
import {FieldWithOptionalComponent} from "./partner-form/components/commons/field-with-optional/field-with-optional.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    PartnerFormComponent,
    PartnerHomeComponent,
    LegalInformationComponent,
    FieldWithOptionalComponent

  ],
  exports: [
    PartnerHomeComponent,
    FieldWithOptionalComponent
  ],
  providers: [
    PartnerService
  ]
})

export class PartnerModule { }

