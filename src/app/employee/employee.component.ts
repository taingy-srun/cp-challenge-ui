import { Component } from '@angular/core';
import { EmployeeService } from './data/employee-service';
import { Employee } from './data/employee-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees!: Employee[];
  searchForm!: FormGroup;
  searchText = "";

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.initFrom();
    this.getAll();
  }

  private initFrom() {
    this.searchForm = new FormGroup({
      search: new FormControl()
    });
  }

  public getAll() {
    this._employeeService.getAll(this.searchText).subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public search() {
    this.searchText = this.searchForm.value.search;
    this.getAll();
  }

  public delete(_id: number) {
    this._employeeService.delete(_id).subscribe({
      next: (deleted) => {
        this._onDeleteSuccess(deleted);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private _onDeleteSuccess(message: any) {
    alert(JSON.stringify(message.message));
  }
 
}
