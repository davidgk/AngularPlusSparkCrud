import { Routes, RouterModule }   from '@angular/router';
import { HomeComponent } from "../../home/home.component";
import { NotFoundComponent } from '../../commons/views/not-found/not-found.component';
import { ModuleWithProviders } from "@angular/core/core";
import { PartnerHomeComponent } from "app/crud/partner/partner-home.component";
import { PartnerFormComponent } from "app/crud/partner/partner-form/partner-form.component";


const appRoutes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'partner', component: PartnerHomeComponent },
  { path: 'partner/new', component: PartnerFormComponent},
  /*,{ path: 'users/:id', component: UserFormComponent}*/
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
