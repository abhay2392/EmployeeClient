import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employee:Employee[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
this._employeeService.getEmployees().subscribe(res=>console.log(res));
  }

}
