import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  PassForm = new FormGroup({
    website: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private service:SharedService){

  }

  user:any;
  letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q','W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  addPass(){
    var val = {
      website: this.PassForm.value.website,
      password: this.PassForm.value.password,
      user: localStorage.getItem('user')
    }

    this.service.addPass(val).subscribe(res=>{
      
    })

    location.reload();
  }

  generatePass(){
    var pass:string = "";
    for(var i = 0; i<4; i++)
    {
      pass = pass + this.letters[Math.floor(Math.random() * this.letters.length)];
      pass = pass + this.numbers[Math.floor(Math.random() * this.numbers.length)];
      pass = pass + this.special[Math.floor(Math.random() * this.special.length)];
    }

    console.log(pass);
    this.PassForm.setValue({
      website: '',
      password: pass
    });
    var password = document.getElementById('password');
    password?.setAttribute('value', 'pass');
  }
}
