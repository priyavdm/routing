import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  getalldata:any;
  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getcomp();
  }

  getcomp(){
    this.service.getcomp().subscribe((data)=>{
      this.getalldata=data;
    })
  }
  list(id:number){
    this.router.navigate(['company',id])
  }

}
