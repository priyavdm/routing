import { Component } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  getalldata:any;
  constructor(public service:ServiceService){}

  getcomp(){
    this.service.getcomp().subscribe((data)=>{
      this.getalldata=data;
    })
  }

}
