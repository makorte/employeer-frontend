import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {EmployeesComponent} from "./pages/employees/employees.component";

const routes: Routes = [
  {path: "employees", component: EmployeesComponent},
  {path: "", component: DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
