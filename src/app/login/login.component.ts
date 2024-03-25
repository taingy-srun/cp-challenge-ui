import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './data/login.service';
import { Credential } from './data/credential-model';
import { environment } from 'src/environments/enviroment.development';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  username!: string;
  password!: string;

  constructor(private _loginService: LoginService, private _authenticationService: AuthenticationService, private _router: Router) {}

  ngOnInit() {
    this._initFrom();
  }

  private _initFrom() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  private _setValue() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
  }


  private _login() {
    let pwd = btoa(this.password);
    const user = new Credential(this.username, pwd);
    this._loginService.login(user).subscribe({
      next: (user) => this._onLoginSuccess(),
      error: (error) => this._onLoginFailed(error)
    });
  }

  public login() {
    this._setValue();
    
    if (!this.loginForm.valid) {
      alert(environment.msg_required_fields);
    } 

    this._login();
  }

  private _onLoginFailed(error: any) {
    alert(JSON.stringify(error.error));
  }
 
  private _onLoginSuccess() {
    this._setAuthenticationData();
    this._goHome();
  }

  private _goHome() {
    this._router.navigate(["/"]);
  }

  private _setAuthenticationData() {
    this._authenticationService.setLoggedIn("true");
  }

}
