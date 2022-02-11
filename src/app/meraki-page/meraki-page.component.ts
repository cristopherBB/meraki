import { Component, OnInit, inject, Inject } from '@angular/core';
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
