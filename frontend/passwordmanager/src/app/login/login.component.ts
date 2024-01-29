import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private service:SharedService, private router:Router){

  }

  Info:any;

  loginUser(){
    this.service.getCustomer(this.loginForm.value.user).subscribe(data => {
      this.Info = data;
      console.log(this.Info)
      if(this.Info["password"] != this.loginForm.value.password){
        alert("Enter correct username and password");
      }
  
      else{
        this.service.User = this.Info["user"];
        console.log(this.service.User)
        localStorage.setItem("user", this.Info["user"]);
        this.router.navigate(['/dashboard']);
      }
    },error=>alert('Enter correct username')
    )
  }
}
