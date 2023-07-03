import { Component } from '@angular/core';
import { LoanRequest } from '../model/loan-request';
import { LoanRequestService } from '../service/loan-request.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  loanReq! : LoanRequest[]; 
  
  constructor(private userService: LoanRequestService){

  }

  

  ngOnInit(): void {
    this.userService.findAll().subscribe(data=>{
      this.loanReq =data;
    });
    // throw new Error('Method not implemented.');
  }

}
