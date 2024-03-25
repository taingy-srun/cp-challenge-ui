import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AppComponent } from "./app.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const AppRouter = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "employees",
        component: EmployeeComponent
    },
    {
        path: "login",
        component: LoginComponent
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