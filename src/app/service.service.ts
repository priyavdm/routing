import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:4000';
  constructor(private http:HttpClient) { }

  getemp(){
    return this.http.get(this.url+ '/getemp')
  }
  getcomp(){
    return this.http.get(this.url+ '/getcomp')
  }
  getdet(id:string|null){
    return this.http.get(this.url+ '/getempdet/' +id)
  }
  getcompdet(id:string|null){
     return this.http.get(this.url+ '/getcompdet/' +id)
  }
}
