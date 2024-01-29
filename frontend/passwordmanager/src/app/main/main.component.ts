import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  Contact_Info(){
    alert("Hi! To contact us either call on XXXXXXXXXXX \nOr email us at customercare@passwordx.com. \nThank You!")
  }
}
