import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanRequest } from '../model/loan-request';
import { LoanRequestService } from '../service/loan-request.service';

@Component({
  selector: 'app-loan-request-form',
  templateUrl: './loan-request-form.component.html',
  styleUrls: ['./loan-request-form.component.css']
})
export class LoanRequestFormComponent {

  amount!: number;
  tenure!: number;
  salary! : number ;
  description! : string ;
  userId! : string;
  status! : string ;

  userData! : LoanRequest;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private dataService : LoanRequestService  ){
      this.userData = new LoanRequest();
    }
  onSubmit(){
      this.userData.userId = this.userId;
      this.userData.description = this.description;
      this.userData.amount = this.amount;
      this.userData.salary = this.salary;
      this.userData.tenure = this.tenure; 
      this.dataService.save(this.userData).subscribe(result=>this.gotoListApplication());

  }

  gotoListApplication(){
    this.router.navigate(['/users']);
  }

}
