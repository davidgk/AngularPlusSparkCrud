import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ComboBoxModule} from "ng2-combobox";

import {PartnerFormComponent} from "./partner-form/partner-form.component";
import {PartnerHomeComponent} from "./partner-home.component";
import {LegalInformationComponent} from "./partner-form/components/legal-information/legal-information.component";
import {OptionalClientLevelComponent} from "./partner-form/components/legal-information/optional-client-level/optional-client-level.component";
import {ComboContractEntityComponent} from "./partner-form/components/legal-information/combo-contract-entity/combo-contract-entity.component";
import { ComboBillingEntityComponent } from './partner-form/components/legal-information/combo-billing-entity/combo-billing-entity.component';
import { ComboPartnerTypeComponent } from './partner-form/components/legal-information/combo-partner-type/combo-partner-type.component';
import { ComboBillingStatusComponent } from './partner-form/components/legal-information/combo-billing-status/combo-billing-status.component';
import { ComboIntegrationStatusComponent } from './partner-form/components/legal-information/combo-integration-status/combo-integration-status.component';

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
    OptionalClientLevelComponent,
    ComboContractEntityComponent,
    ComboBillingEntityComponent,
    ComboPartnerTypeComponent,
    ComboBillingStatusComponent,
    ComboIntegrationStatusComponent

  ],
  exports: [
    PartnerHomeComponent
  ]

})

export class PartnerModule { }

