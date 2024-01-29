import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000"
  User:any;
  Password:any;
  PasswordID:any;
  flag:boolean = false;


  constructor(private http:HttpClient) { }

  getPassList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/customer/' + localStorage.getItem('user') + '/passwords')
  }

  addPass(val:any){
    return this.http.post(this.APIUrl + '/customer/' + localStorage.getItem('user') + '/passwords', val)
  }

  deletePass(val:any){
    return this.http.delete(this.APIUrl + '/passwords/' + val)
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl + '/customer/', val)
  }

  getCustomer(val:any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/customer/' + val)
  }

  getPass(val:any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/passwords/' + val)
  }

  editPass(id:any, val:any){
    return this.http.put(this.APIUrl + '/passwords/' + id, val);
  }

  deleteCust(val:any){
    return this.http.delete(this.APIUrl + '/customer/' + val)
  }
}
