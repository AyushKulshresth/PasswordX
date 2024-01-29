import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  
  PasswordList: any = [];
  

  constructor(private service:SharedService){

  }

  letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q','W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


  ngOnInit(): void {
    this.refreshPassList();
    console.warn(this.PasswordList);
  }

  passwordAssesment(password:string){
    var res = "Weak";
    if(password.length < 6)
     return res;
    for(var p = 0; p<password.length; p++){
      if(this.numbers.indexOf(password[p]) > -1 && res === "Weak" || this.special.indexOf(password[p]) > -1 && res === "Weak")
      {
        res = "Medium";
      }
      if(this.special.indexOf(password[p]) > -1 && res === "Medium")
      {
        res = "Strong";
      }
    }
    return res;
  }

  refreshPassList(){
    this.service.getPassList().subscribe(data => {
      this.PasswordList = data;
    })
  }

  delPass(item:any){
    this.service.deletePass(item.id).subscribe(data=>{
      this.refreshPassList();
    })
  }


  editPass(item:any){
    this.service.flag = true;
    this.service.PasswordID = item.id;
    console.warn(this.service.PasswordID);
    this.service.getPass(item.id).subscribe(data => {
      this.service.Password = data;
    })
    location.reload;
  }

  displayedColumns: string[] = ['website', 'password',  'passwordAssesment', 'edit', 'delete'];
}
