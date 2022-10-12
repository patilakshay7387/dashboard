import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent}
  
  ];

  @NgModule({
    declarations: [
      LoginComponent, RegisterComponent
  ],
    imports: [RouterModule.forRoot(routes),
      FormsModule, ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
