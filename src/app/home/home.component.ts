import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _authenticationService: AuthenticationService) {}

  public isLoggedIn() {
    return this._authenticationService.isLoggedIn();
  }

}
