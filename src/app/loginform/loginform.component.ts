import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator,FormControl, Validators, FormGroup} from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  searchterm2:number;
arrayfordetails=[];
  loginformgroup:FormGroup;
  Name: any;
  // @Input() name:String = this.Name;
    Phonenumber: any;
    email: any;
    id:any;
    password:any;
    array_length:any;
    i:any;
  a: any;
  id_no: any;
  pass: any;
  Id_value: any;
  password_value: any;
  event1: any;
  event2: number;


  constructor(
    private formBuilder: FormBuilder,private router: Router,private _localvariable:ServiceService ,private route: ActivatedRoute ) { 
      this.route.queryParams.subscribe(params => {
        console.log(params);
        this.id=params.id;
        this.Name = params.name;
       this.Phonenumber=params.phonenumber;
       this.email=params.email;
       this.password=params.password
      });
  
  }
 
  
  ngOnInit(): void {
   
     this. loginformgroup = this.formBuilder.group({
      Id:['', Validators.required],
      password:['', Validators.required]
    })
  //  this.searchterm2=10
  }
  loginclicked():void
  {
    
    if(this.loginformgroup.valid)
    {
      this.Id_value=0;
      this.Id_value=this.loginformgroup.get('Id').value;
      console.log('id:'+ this. Id_value);
      this.password_value=0;
     this.password_value=this.loginformgroup.get('password').value;
      console.log('password:'+ this.  password_value);

    
      // let navigationExtras: NavigationExtras = {
      //   queryParams: {
      //       name: 'name',
      //       role:  password
      //   }
    // }
    // this.router.navigate(['signup'], navigationExtras);
    // the below code will run for post
    // console.log(this.loginformgroup.value.Id);
    // this._localvariable.postmethod(this.loginformgroup.value)
    // .subscribe(
    //   response => console.log('sucess!',response),
    
    //  error => console.log(error));

    // console.log("success")
    // the below get method will work
    this._localvariable.getDetail()
 
    .subscribe((data:any[])=>{
      console.log(data);
      this.arrayfordetails=data;
      console.log(this.arrayfordetails);
      this.array_length=0;
      this.array_length=this.arrayfordetails.length;
      this.i=0;
      this.id_no=0;
      this.pass=0;
      this.event1=0;
      this.event2=0;
      for(this.i;this.i<this.array_length;this.i++){
        this.id_no= this.arrayfordetails[this.i].id;
        this.pass=this.arrayfordetails[this.i].password;
        if((this.id_no==this.Id_value)&&(this.pass==this.password_value)){
     this.event1=1;
          // &&(this.pass==this.password_value)
        
console.log("sucess!!!!!",this.id_no)
        }
        else{
          this.event2=1
          console.log("not found")
        }
       
    }
 
if(this.event1==1){
//   let navigationExtras: NavigationExtras = {
//     queryParams: {
//       id:id,
//         name: name,
//         phonenumber:phonenumber,
//         email:email,
//         password:password

//     }
// }
this.router.navigate(['signupdetails']);

}
     
    });
    
    
  
    }
    else{
      Object.keys(this.loginformgroup.controls).forEach(key =>{

        this.loginformgroup.get(key).markAsTouched();
      });
    }
  }
  signclicked():void
  {
    this.router.navigate(['signup']);
  }
}
