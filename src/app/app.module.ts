import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { AppRouter } from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationInterceptor } from './authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouter),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
