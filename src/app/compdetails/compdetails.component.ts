import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-compdetails',
  templateUrl: './compdetails.component.html',
  styleUrls: ['./compdetails.component.scss']
})
export class CompdetailsComponent implements OnInit{

  compdata:any;
  constructor(public service:ServiceService, public actroute:ActivatedRoute){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.actroute.snapshot.paramMap.get('id')
    this.service.getcompdet(id).subscribe((data)=>{
         this.compdata=data;
    })

  }

}
