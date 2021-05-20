import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  bands:Band[]=[];
  band:Band={
    id:0,
    name:"",
    yearOfForming:0
  }

  constructor(private dataSerice:DataService) { }

  ngOnInit(): void {
    this.bands=this.dataSerice.getBands();
  }

  showBand(ev:any){
    console.log(ev);
    this.band=this.dataSerice.getBand(ev);
  }

}
