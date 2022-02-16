import { Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
//import { MatSidenav } from '@angular/material/sidenav';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  close(reason: string) {
    this.sidenav.close();
  }

  about(){
    this.sidenav.close();
    let element = document.getElementById("text")
    element!.scrollIntoView({behavior: 'smooth'});
  }

  products(){
    this.sidenav.close();
    let element = document.getElementById("product")
    element!.scrollIntoView({behavior: 'smooth'});
    
  }

  gallery(){
    this.sidenav.close();
    let element = document.getElementById("worksGallery")
    element!.scrollIntoView({behavior: 'smooth'});
  }

  ubication(){
    this.sidenav.close();
    let element = document.getElementById("ubicationID")
    element!.scrollIntoView({behavior: 'smooth'});
  }
}
