import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/services/guards/auth-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { SignInGuard } from './shared/services/guards/sign-in-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: AuthenticationComponent, canActivate: [SignInGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [SignInGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
