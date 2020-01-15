import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

getEmployees(){
  return this._http.get("http://localhost:58247/api/Employee");


}
}
