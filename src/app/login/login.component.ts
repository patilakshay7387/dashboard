import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'starter';
  loginForm = this.fb.group({
    // username: [null],
    // password: [null],
    username: ['eve.holt@reqres.in'],
    password: ['5cityslicka'],
    errorMessage : ''
  });
  constructor(private fb: FormBuilder, private readonly httpClient:HttpClient,private router:Router) {}

  onSubmit(fb:FormGroup) {
    const usserName = fb.controls['username'].value;
    const password = fb.controls['password'].value;
    const endpoint = "https://reqres.in/api/login"
    this.httpClient.post(endpoint,{email:usserName,password:password}).subscribe((response:any )=>{
    console.log(response);
    localStorage.setItem('token',response.token);
    // this.router.navigateByUrl('/dashboard')
    },(err)=>{
      console.log(err);
      this.loginForm.controls['errorMessage'].setValue(err.error.error)
      console.log(this.loginForm.controls['errorMessage']);
    })
  }
}
