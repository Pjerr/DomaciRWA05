import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { Record } from 'src/app/models/record';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  bands:Band[]=[];
  records:Record[]=[];


  ngOnInit(): void {
    this.bands=this.dataService.getBands();
    this.records=this.dataService.getRecords();
  }

}
