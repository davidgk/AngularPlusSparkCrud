import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ComboBoxModule} from "ng2-combobox";

import {PartnerFormComponent} from "./partner-form/partner-form.component";
import {PartnerHomeComponent} from "./partner-home.component";
import {LegalInformationComponent} from "./partner-form/components/legal-information/legal-information.component";
import {FieldWithComboComponent} from "./partner-form/components/commons/field-with-combo/field-with-combo.component";
import {OptionalClientLevelComponent} from "./partner-form/components/legal-information/optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./partner-form/components/legal-information/combo-contract-entity/combo-contract-entity.component";

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
    PartnerHomeComponent,
    LegalInformationComponent,
    FieldWithComboComponent,
    OptionalClientLevelComponent,
    ComboContractEntityComponent

  ],
  exports: [
    PartnerHomeComponent
  ]

})

export class PartnerModule { }

