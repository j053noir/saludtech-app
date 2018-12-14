import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { AuthenticationService } from './shared/services/authentication.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { MedicsService } from './shared/services/medics.service';
import { ServicesService } from './shared/services/services.service';
import { ServicesComponent } from './services/services.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { MedicsComponent } from './medics/medics.component';
import { MedicsListComponent } from './medics/medics-list/medics-list.component';
import { MedicItemComponent } from './medics/medic-item/medic-item.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { CollapseDirective } from './shared/directives/collapse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    CollapseDirective,
    AuthenticationComponent,
    HomeComponent,
    RegistrationComponent,
    ServicesComponent,
    ServicesListComponent,
    ServiceItemComponent,
    MedicsComponent,
    MedicsListComponent,
    MedicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    MedicsService,
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
