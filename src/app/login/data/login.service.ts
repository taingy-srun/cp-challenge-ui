import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/enviroment.development";
import { Credential } from "./credential-model";

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    _baseUrl: string = environment.api_base_url;
  
    constructor(private _http: HttpClient) { }
  
    public login(user: Credential): Observable<any> {
      const url = this._baseUrl + "login";
      return this._http.post<any>(url, user.toJSON());
    }

  }
  