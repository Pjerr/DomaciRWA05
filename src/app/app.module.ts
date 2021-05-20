import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecordDetailsComponent } from './components/record-details/record-details.component';
import { BandsComponent } from './components/bands/bands.component';
import { RecordsComponent } from './components/records/records.component';
import { BandDetailsComponent } from './components/band-details/band-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordDetailsComponent,
    BandsComponent,
    RecordsComponent,
    BandDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
