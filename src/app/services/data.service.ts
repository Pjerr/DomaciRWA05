import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  band1:Band={
    id:1,
    name:"Nirvana",
    yearOfForming:1987
  };

  band2:Band={
    id:2,
    name:"Soundgarden",
    yearOfForming:1984
  };

  band3:Band={
    id:3,
    name:"Pearl Jam",
    yearOfForming:1990
  };

  band4:Band={
    id:4,
    name:"Alice in Chains",
    yearOfForming:1987
  };

  record1:Record={
    id:1,
    name:"Nevermind",
    band:this.band1,
    yearOfRelease:1991,
    cover:"https://images-na.ssl-images-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg"
  }

  record2:Record={
    id:2,
    name:"Superunknown",
    band:this.band2,
    yearOfRelease:1994,
    cover:"https://upload.wikimedia.org/wikipedia/en/3/3a/Superunknown.jpg"
  }

  record3:Record={
    id:3,
    name:"Ten",
    band:this.band3,
    yearOfRelease:1991,
    cover:"https://upload.wikimedia.org/wikipedia/en/2/2d/PearlJam-Ten2.jpg"
  }

  record4:Record={
    id:4,
    name:"Dirt",
    band:this.band4,
    yearOfRelease:1992,
    cover:"https://upload.wikimedia.org/wikipedia/en/f/f9/Dirt_%28Alice_in_Chains_album_-_cover_art%29.jpg"
  }

  records:Record[]=[this.record1,this.record2,this.record3,this.record4];
  bands:Band[]=[this.band1,this.band2,this.band3,this.band4];

  getBands(){
    return this.bands;
  }

  getBand(id:number){
    return this.bands[id];
  }

  getRecords(){
    return this.records;
  }
}
