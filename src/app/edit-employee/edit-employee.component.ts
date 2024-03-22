import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee/data/employee-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee/data/employee-model';
import { environment } from 'src/environments/enviroment.development';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  updateForm!: FormGroup;
  employeeId!: number;

  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._setEmployeeId();
    this._initForm();
    this._getEmployee();
  }

  private _setEmployeeId() {
    this.employeeId = this._route.snapshot.params["employeeId"];
  }

  private _initForm() {
    this.updateForm = new FormGroup({
      name: new FormControl(),
      phoneNumber: new FormControl(),
      supervisors: new FormControl()
    });
  }

  private _getEmployee() {
    this._employeeService.getOne(this.employeeId).subscribe(
      (employee) => {
        this._setValueToForm(employee);
      }
    );
  }

  private _setValueToForm(employee: Employee) {
   this.updateForm = new FormGroup({
    name: new FormControl(employee.name),
    phoneNumber: new FormControl(employee.phoneNumber),
    supervisors: new FormControl(employee.supervisors)
   });
  }

  public save(form: FormGroup) {
    if(form.valid) {
      this._save(form);
    } else {
      alert(environment.msg_required_fields);
    }
  }

  private _save(form: FormGroup) {
    const updateEmployee = {
      employeeId: this.employeeId,
      name: form.value.name,
      phoneNumber: form.value.phoneNumber,
      supervisors: form.value.supervisors
    }

    this._employeeService.update(this.employeeId, updateEmployee).subscribe(
      (updated) => {
        this._onUpdateSuccess(updated);
      },
      (error) => {
        this._onUpdateFailed(error.error);
      }
    );
  }

  private _onUpdateSuccess(message: any) {
    alert(JSON.stringify(message.message));
    this.gotoHomePage();
  }

  public gotoHomePage(): void {
    this._router.navigate(["/"]);
  }

  private _onUpdateFailed(message: any) {
    alert(JSON.stringify(message.message));
  }

}
