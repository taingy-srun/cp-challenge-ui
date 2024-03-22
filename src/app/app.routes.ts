import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AppComponent } from "./app.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeeComponent } from "./employee/employee.component";

export const AppRouter = [
    {
        path: "",
        component: EmployeeComponent
    },
    {
        path: "employees/new",
        component: AddEmployeeComponent
    },
    {
        path: "employees/:employeeId/edit",
        component: EditEmployeeComponent
    }
];