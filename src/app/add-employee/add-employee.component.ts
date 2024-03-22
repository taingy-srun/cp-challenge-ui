import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee/data/employee-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/enviroment.development';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  newEmployeeForm!: FormGroup

  constructor(private _employeeService: EmployeeService, private _router: Router) {}

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.newEmployeeForm = new FormGroup({
      employeeId: new FormControl(),  
      name: new FormControl(),
      phoneNumber: new FormControl(),
      supervisors: new FormControl()
    });
  }

  public add(form: FormGroup){
    if (form.valid) {
      this._add(form);
    } else {
      alert(environment.msg_required_fields);
    }
  }

  private _add(form: FormGroup) {
    const newEmployee = {
      employeeId: form.value.employeeId,
      name: form.value.name,
      phoneNumber: form.value.phoneNumber,
      supervisors: form.value.supervisors
    }

    this._employeeService.add(newEmployee).subscribe(
      (next) => {
        this.gotoHomePage();
      },
      (error) => {
        this._onAddingFailed(error);
      });
  }

  public gotoHomePage(): void {
    this._router.navigate(["/"]);
  }

  private _onAddingFailed(error: any) {
    alert(JSON.stringify(error.error));
  }

}
