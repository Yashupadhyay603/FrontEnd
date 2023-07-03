import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoanRequestFormComponent } from './loan-request-form/loan-request-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoanRequestService } from './service/loan-request.service';

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent,
    ListUserComponent,
    LoanRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [LoanRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
