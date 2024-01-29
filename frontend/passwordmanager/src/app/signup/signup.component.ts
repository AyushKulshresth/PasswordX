import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
  })

  e:any;

  constructor(private service: SharedService, private router: Router){
    
  }

  async signupSubmit(){
    if(this.signupForm.value.cpassword !== this.signupForm.value.password)
    {
      alert("Passwords Don't Match");
      return;
    }

    // this.e = this.signupForm.value.email;

    // if(this.e.indexOf('@') < -1){
    //   alert('Enter valid email')
    // }

    var val = {
      user: this.signupForm.value.user,
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    this.service.addCustomer(val).subscribe(res=>{
      alert('added');
      this.router.navigate([''])
      },
      error=>alert('Use a different username')
    );
  }
}
