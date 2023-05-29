import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService} from "../service.service";

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit{
   empdet:any=[];
  constructor(public service:ServiceService, public Actroute:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.Actroute.snapshot.paramMap.get('id');
    this.service.getdet(id).subscribe((data)=>{
      this.empdet=data;
    })
  }



}
