import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Record} from "../../models/record"

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {

  @Input() record:Record={
    id:0,
    name:"",
    band:{
      id:0,
      name:"",
      yearOfForming:0
    },
    yearOfRelease:0,
    cover:""
  }

  @Output() ev=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showBand(id:number){
    console.log("clicked" + id);
    this.ev.emit(id);
  }
}
