import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/services/guards/auth-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { SignInGuard } from './shared/services/guards/sign-in-guard.service';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { ServicesComponent } from './services/services.component';
import { MedicsComponent } from './medics/medics.component';
import { MedicsListComponent } from './medics/medics-list/medics-list.component';
import { MedicItemComponent } from './medics/medic-item/medic-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: AuthenticationComponent, canActivate: [SignInGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [SignInGuard] },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ServicesListComponent },
      { path: ':id', component: ServiceItemComponent },
      { path: '', component: ServicesListComponent }
    ]
  },
  {
    path: 'medics',
    component: MedicsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: MedicsListComponent },
      { path: ':id', component: MedicItemComponent },
      { path: '', component: MedicsListComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
