import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BandsComponent } from './components/bands/bands.component';
import { RecordsComponent } from './components/records/records.component';

const routes: Routes = [
  {
    path: '', component:RecordsComponent
  },
  {
    path:'band', component:BandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
