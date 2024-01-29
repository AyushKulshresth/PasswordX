import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  Password:any

  constructor(public services: SharedService, private router:Router) {
    
  }

  EditForm = new FormGroup({
    website: new FormControl(''),
    password: new FormControl('')
  })

  EditPass(){
    var data = {
      website: this.EditForm.value.website,
      password: this.EditForm.value.password,
      user: localStorage.getItem('user')
    }

    this.services.editPass(this.services.PasswordID, data).subscribe(res=>{

    })

    location.reload();
  }

  logout(){
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }
}
