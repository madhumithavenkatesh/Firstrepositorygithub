import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';
import { SignupdetailsComponent } from './signupdetails/signupdetails.component';
import { OwncreationComponent } from './owncreation/owncreation.component';
import { GoodReceiptComponent } from './good-receipt/good-receipt.component';


const routes: Routes = [
  {
    path:"loginform",
    component:LoginformComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"signupdetails",
    component:SignupdetailsComponent
  },

  {
    path:"owncreation",
    component:OwncreationComponent
  },{
    path:"good-receipt",
    component:GoodReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
