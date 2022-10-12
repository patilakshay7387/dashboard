import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http : HttpClient,private router:Router) {
    this.signupForm =this.formBuilder.group({
      fullname:[''],
      email:[''],
      mobile:[''],
      password:['']
    })  
  }
  ngOnInit(): void {
    
   }

   signUp(){
    this.http.post<any>("http://localhost:3000/signUp",this.signupForm.value )
    .subscribe(res=>{
      alert("Succefully Signup");
      this.signupForm.reset();
      this.router.navigate(['login']);
        })
     
  }

  }

