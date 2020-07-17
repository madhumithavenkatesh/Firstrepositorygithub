import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../signupdetails/signupdetails.component';
@Component({
  selector: 'app-idcomponentdialog',
  templateUrl: './idcomponentdialog.component.html',
  styleUrls: ['./idcomponentdialog.component.css']
})
export class IdcomponentdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IdcomponentdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  save(){
    this.dialogRef.close();
  }
}
