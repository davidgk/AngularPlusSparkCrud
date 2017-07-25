import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {MainComponent} from "./commons/views/main/main.component";
import {NavigatorComponent} from "./commons/views/navigator/navigator.component";
import {MainContainerComponent} from "./commons/views/main-container/main-container.component";


import {RouterOutletComponent} from "./commons/views/router-outlet/router-outlet.component";
import {HomeComponent} from "./home/home.component";
import {Logger} from "angular2-logger/core";
import {environment} from "../environments/environment";
import {routing} from "app/commons/routes_config/app.routing";
import {NotFoundComponent} from "app/commons/views/not-found/not-found.component";
import {PartnerModule} from "app/crud/partner/partner.module";
import {PartnerService} from "./services/partner/partner.service";
import {ContractEntitiesService} from "./services/contract-entity/contract-entities.service";
import {BillingService} from "./services/billing/billing.service";
import {IntegrationService} from "./services/integration/integration.service";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigatorComponent,
    MainContainerComponent,
    RouterOutletComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    PartnerModule

  ],
  providers:    [ Logger,   PartnerService , ContractEntitiesService, BillingService, IntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule {

     constructor(private logger: Logger) {
        console.log(environment.logger.level);
        this.logger.level = environment.logger.level;
    }


}

