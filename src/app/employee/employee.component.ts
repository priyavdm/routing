import { Component, OnInit } from '@angular/core';
import { ServiceService} from "../service.service";
import {  Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  getalldata:any;
  
  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getemp();
  }

  getemp(){
   this.service.getemp().subscribe((data)=>{
    console.log(data);
    
    this.getalldata=data;
   })
  }
  list(id:number){
    this.router.navigate(['employee',id])
  }

}
