import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder,Validator,FormControl, Validators, FormGroup, EmailValidator} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceService } from '../service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { DialogueUpdateComponent } from '../dialogue-update/dialogue-update.component';
import { IdcomponentdialogComponent } from '../idcomponentdialog/idcomponentdialog.component';

export interface DialogData {
 Identification:number;
}




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  arrayfordetails=[];
  signupformgroup:FormGroup;

 selectedcontact:any[];
  contacts: string[] = ['email', 'pnonenumber'];
  route: any;
  id: number;
  a: {};
  identification: any;
  arrayfordetails1: any[];
  id_dialogue: any;
  length: any;
  data1: any;
  id_value: any;
  radiochecked(event:any){
  if(event==1)
  {
   console.log("kii"+event);
   this.signupformgroup.get('phonenumber').markAsTouched();
   this.signupformgroup.get('email').markAsUntouched();
   this.signupformgroup.get('email').disable();
   this.signupformgroup.get('phonenumber').enable();
  }
  else{
    console.log(+event)
    this.signupformgroup.get('email').enable();
    this.signupformgroup.get('phonenumber').markAsUntouched();
    this.signupformgroup.get('phonenumber').disable();
    this.signupformgroup.get('email').markAsTouched();
  }
}

  constructor(
    private fB:FormBuilder , private router: Router ,private _localvariable:ServiceService ,public dialog: MatDialog ) {
    // this.route.queryParams.subscribe(params => {
    //     console.log(params);
    // });
}

  ngOnInit(): void {
   
    this.signupformgroup = this.fB.group({
      // Id:['',Validators.required],
      Name:['', [Validators.required,Validators.minLength(10)]],
     
      phonenumber:['', [Validators.required,Validators.maxLength(10),Validators.minLength(9)]],
     email:['',[Validators.required]],
     password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(15)]]
    })
    this.signupformgroup.get('phonenumber').disable();
    this.signupformgroup.get('email').disable();
  }
//   delete():void{
//  this.id=1;
//    this._localvariable.delete(this.id)
//    .subscribe(
//      response => console.log('sucess!',response),
   
//     error => console.log(error));
//  }
 
  signupclicked():void{
    if(this.signupformgroup.valid)
    {
      // const id=this.signupformgroup.get('Id').value;
      const name=this.signupformgroup.get('Name').value;
      // console.log('name:'+name)
      const phonenumber=this.signupformgroup.get('phonenumber').value;
      // console.log('phonenumber:'+phonenumber)
      const email=this.signupformgroup.get('email').value;
      const password=this.signupformgroup.get('password').value;
      // console.log('email:'+email)

      this._localvariable.getDetail()
      .subscribe((data:any[])=>{
        console.log(data);
        this.arrayfordetails=data;
       
      });      


   
      // console.log(this.signupformgroup.value.Id);
      this._localvariable.postmethod(this.signupformgroup.value)
     
      .subscribe(
        response => console.log('sucess!',response),
      
       error => console.log(error));
  
      console.log("success")
      this.length=0
      this._localvariable.getDetail()
      .subscribe((data:any[])=>{
        console.log(data);
        this.arrayfordetails1=data;
        this.length=this.arrayfordetails1.length;
        this.length=this.length-1;
       this.id_value=this.arrayfordetails1[this.length].id;

        
      const dialogRef = this.dialog.open(IdcomponentdialogComponent, {
        width: '200px',height:'250px',
        data: {identifaction:this.id_value}
      });
      
      
        
            dialogRef.afterClosed().subscribe(result => {
      
              console.log(`Dialogue Closed`);
            });


       
      });   

    

      let navigationExtras: NavigationExtras = {
        queryParams: {
          // id:id,
            name: name,
            phonenumber:phonenumber,
            email:email,
            password:password

        }
    }
    this.router.navigate(['loginform'], navigationExtras);
    }
  }
}
