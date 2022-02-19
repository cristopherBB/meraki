import { Component, OnInit, inject, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { firebaseService } from '../app.service';

export interface DialogData {
  img: string;
  name: string;
  description: string;
}

@Component({
  selector: 'seeProduct',
  templateUrl: 'seeProduct.html',
})
export class seeProductDialog {
  constructor(
    public dialogRef: MatDialogRef<seeProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-meraki-page',
  templateUrl: './meraki-page.component.html',
  styleUrls: ['./meraki-page.component.scss']
})
export class MerakiPageComponent implements OnInit {
  @ViewChild("text") text: ElementRef | undefined;

  img!: string
  name!: string
  description!: string
  constructor(private dialog: MatDialog, private firebase: firebaseService) { }

  ngOnInit(): void {
  }

  modalImage(number: number){
    let elements = this.firebase.getData()
    this.img = elements[number].img
    this.name = elements[number].name
    this.description = elements[number].description
    const dialogRef = this.dialog.open(seeProductDialog, {
      width: '400px',
      panelClass: 'my-custom-dialog-class',
      data: {img: this.img, name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

function reveal() {
  if(window.innerWidth > 1000){
    var scroll = window.pageYOffset;
    var headerText = document.getElementById("text");
    headerText!.style.transform = "translate(0px," + scroll/3 + "%)";

    var aboutCard = document.getElementById("card");
    aboutCard!.style.transform = "translate(0px," + (-scroll/4) + "%)";
    animate(".products",125, "animate__fadeInRightBig")
  }

  if(window.innerHeight < 1000){
    animate(".products",125, "animate__fadeInLeft")
  }
  animate(".gallery",150, "animate__fadeIn")
  animate(".ubication",30, "animate__fadeInUp")
  animate(".contact",30, "animate__fadeInLeft")

}

function animate(classType: string, visible: number, efect: string){
  var reveals = document.querySelector(classType);
  var windowHeight = window.innerHeight;
  var elementTop = reveals!.getBoundingClientRect().top;
  var elementVisible = visible;
  if (elementTop < windowHeight - elementVisible) {
    reveals!.classList.add("animate__animated", efect);
  } else {
    reveals!.classList.remove("animate__animated", efect);
  }
}

window.addEventListener("scroll", reveal);
