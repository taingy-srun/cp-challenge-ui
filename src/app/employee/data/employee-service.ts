import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee-model';
import { environment } from 'src/environments/enviroment.development';

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {

    _baseUrl=  environment.api_base_url + "api/employees";

    constructor(private _http: HttpClient) {}
    
    public getAll(search: string): Observable<Employee[]> {
        const url = this._baseUrl + "?search=" + search;
        return this._http.get<Employee[]>(url);
    }

    public getOne(_id: number): Observable<any> {
        const url = this._baseUrl + "/" + _id;
        return this._http.get<any>(url);
    }

    public delete(_id: number): Observable<string> {
        const url = this._baseUrl + "/" + _id;
        return this._http.delete<string>(url);
    }

    public add(employee: any): Observable<string> {
        return this._http.post<string>(this._baseUrl, employee);
    }

    public update(_id: number, employee: any): Observable<string> {
        const url = this._baseUrl + "/" + _id;
        return this._http.put<string>(url, employee);
    }
}