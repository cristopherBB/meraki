import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MerakiPageComponent, seeProductDialog } from './meraki-page/meraki-page.component';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';

// imports
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { environment } from '../environments/environment';
//import {MatSidenav} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    MerakiPageComponent,
    NavbarComponent,
    seeProductDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    GoogleMapsModule,
    MatDialogModule,
    MatIconModule,
    //MatSidenav,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
