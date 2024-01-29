import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from 'express';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  User:any;

  constructor(private service: SharedService){
    this.service.getCustomer(localStorage.getItem('user')).subscribe(res=>{
      this.User = res;
    })
  }

  logout(){
    localStorage.setItem('user', '');
  }

  deleteAccount(){
    this.service.deleteCust(localStorage.getItem('user')).subscribe(res=>{

    });
    localStorage.setItem('user', '');
  }
}
