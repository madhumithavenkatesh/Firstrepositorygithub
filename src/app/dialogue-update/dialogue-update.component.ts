import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../signupdetails/signupdetails.component';
import { DialogueComponent } from '../dialogue/dialogue.component';
import {FormBuilder,Validator,FormControl, Validators, FormGroup, EmailValidator} from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-dialogue-update',
  templateUrl: './dialogue-update.component.html',
  styleUrls: ['./dialogue-update.component.css']
})
export class DialogueUpdateComponent implements OnInit {
  searchterm2:number;
  dialogformgroup:FormGroup;

  constructor( private fB:FormBuilder,private _localvariable:ServiceService ,public dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
     { }

  ngOnInit(): void {
    this.dialogformgroup = this.fB.group({
      // Id:['',Validators.required],
      Name:['', [Validators.required,Validators.minLength(10)]],
     
      phonenumber:['', [Validators.required,Validators.maxLength(10),Validators.minLength(9)]],
     email:['',[Validators.required]],
     password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(15)]]
    })
  
  }
  update(){
    console.log(this.data.identifaction)
   
    console.log(this.dialogformgroup);
   this._localvariable.updateservice(this.data.identifaction,this.dialogformgroup.value)

    .subscribe(
      response => console.log('success!', response),
      //  error =>console.error('Error!',error)
      error => console.log(error)); 
      this.dialogRef.close();
    }
    Cancel()
    {
      this.dialogRef.close();
    }
  }
