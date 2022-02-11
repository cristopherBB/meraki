import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerakiPageComponent } from './meraki-page/meraki-page.component';

const routes: Routes = [
  { 
    path: '',
    component:  MerakiPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }