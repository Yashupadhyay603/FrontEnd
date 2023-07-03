import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanRequestFormComponent } from './loan-request-form/loan-request-form.component';

const routes: Routes = [
  {path : 'users', component: ListUserComponent}
  ,{path : 'adduser', component: LoanRequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
