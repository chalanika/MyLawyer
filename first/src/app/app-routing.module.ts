import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawyerSignupComponent } from './signup/lawyer-signup/lawyer-signup.component';
import { ClientSignupComponent } from './signup/client-signup/client-signup.component';


const routes: Routes = [
  { path: 'signup-lawyer', component:LawyerSignupComponent},
  { path: 'signup-client', component:ClientSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
