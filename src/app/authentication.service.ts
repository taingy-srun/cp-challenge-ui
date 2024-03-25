import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn(): boolean {
    return this.loggedIn != null;
  }


  get loggedIn(): string {
    return localStorage.getItem("isLoggedIn") as string;
  }

  setLoggedIn(login: string) {
    localStorage.setItem("isLoggedIn", login);
  }

  logout() {
    localStorage.clear();
  }
}
