import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [
  {path:'company',component:CompanyComponent},
{path:'employee',component:EmployeeComponent},
{path:'employee/:id', component:EmpdetailsComponent},
{path:'**',component:EmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
