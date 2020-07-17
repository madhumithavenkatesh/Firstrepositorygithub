import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { ServiceService } from '../service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { DialogueUpdateComponent } from '../dialogue-update/dialogue-update.component';

export interface DialogData {
  id(id: any);
  // animal: string;
  // name: string;
  identifaction:number;
  name1:string;
  phonenumber1:string;
  email1:string;
  password1:string;
}
@Component({
  selector: 'app-signupdetails',
  templateUrl: './signupdetails.component.html',
  styleUrls: ['./signupdetails.component.css']
//  template:`<p>Name:{{Name}} </p>
//  <p> PhoneNumber:{{Phonenumber}}</p>
//  <p>E-mail:{{email}}</p>
//  <p>Id:{{id}}</p>
//  <p>Password:{{password}}`

})
export class SignupdetailsComponent implements OnInit {
  // animal: string;
  // name: string;
  identifaction:number;
  name1:string;
  phonenumber1:string;
  email1:string;
  password1:string;
  arrayfordetails=[];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  Name: any;
// @Input() name:String = this.Name;
  Phonenumber: any;
  email: any;
  id:any;
  password:any;
  a: any;
  result1: string;
  sample: any;
  sample1: any;
  identifaction2: any;
  name2: any;
  phonenumber2: any;
  email2: any;
  password2: any;
  constructor(private route: ActivatedRoute,private _localvariable:ServiceService ,public dialog: MatDialog) {
  //   this.route.queryParams.subscribe(params => {
  //     console.log(params);
  //     this.id=params.id;
  //     this.Name = params.name;
  //    this.Phonenumber=params.phonenumber;
  //    this.email=params.email;
  //    this.password=params.password

    
  // });



}

  ngOnInit(): void {
    this._localvariable.getDetail()
  .subscribe((data:any[])=>{
    console.log(data);
    this.arrayfordetails=data;
    this.a=this.arrayfordetails[0].id;
    console.log(this.a)
  });   

  }

  delete(id1):void{
    this.id=id1.id;
console.log(this.id)
      this._localvariable.delete(this.id)
      .subscribe(
        response => 
        // this.result1=response,
        // console.log(this.result1),
        console.log('sucess!',response),
      //  error =>console.error('Error!',error)
       error => console.log(error));
       this._localvariable.getDetail()
       .subscribe((data:any[])=>{
         console.log(data);
         this.arrayfordetails=data;
         this.a=this.arrayfordetails[0].id;
         console.log(this.a)
       });   

    }
    openDialog(id) {
//    this.name="madhu";
// this.animal="ani"
this.identifaction=id.id;
this.name1=id.name;
this.phonenumber1=id.phonenumber;
this.email1=id.email;
this.password1=id.password;

const dialogRef = this.dialog.open(DialogueComponent, {
  width: '300px',height:'250px',
  data: {identifaction:this.identifaction,name1:this.name1,phonenumber1:this.phonenumber1,email1:this.email1,password1:this.password1}
});


  
      dialogRef.afterClosed().subscribe(result => {

        console.log(`Dialogue Closed`);
      });
    }
    update(id){
      this.identifaction=id.id;
this.name1=id.name;
this.phonenumber1=id.phonenumber;
this.email1=id.email;
this.password1=id.password;

const dialogRef = this.dialog.open(DialogueUpdateComponent, {
  width: '300px',height:'530px',

  data: {identifaction:this.identifaction,name1:this.name1,phonenumber1:this.phonenumber1,email1:this.email1,password1:this.password1}
});


  
      dialogRef.afterClosed().subscribe(result => {

        console.log(`Dialogue Closed`);
      });

    }
    
}
