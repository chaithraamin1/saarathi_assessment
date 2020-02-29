import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{FormBuilder}from '@angular/forms';
import {Router} from '@angular/router'
import{ServiceService} from 'src/app/service.service';
@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  empname: any;
  showdata:boolean=false;
  adddetails:boolean=false;
  empform=this.fb.group({
    empname:['',Validators.required],
    id:['',Validators.required],
    dept:['',Validators.required],
    date:['',Validators.required],
    doj:['',Validators.required],
    email:['',Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
  })

  submitted: boolean=false;
  res: any=[];
  deptname: string;
  list: any=[];
  
  get f() { return this.empform.controls; }
  constructor(private fb:FormBuilder,private  router:Router,private service:ServiceService) { 
    var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  }

  ngOnInit() {
    
  }
  get getterinvoicenumber()
  {
    return this.empform.value.empname;
  }
  get getterid()
  {
    return this.empform.value.id;
  }
  get getteremail()
  {
    return this.empform.value.email;
  }

  submit()
  {
    debugger
  

    this.res=this.empform.value;
    // localStorage.setItem("name",this.res.empname)
    // localStorage.setItem("id",this.res.id)
    // localStorage.setItem("dept",this.res.dept)
    // localStorage.setItem("date",this.res.date)
    // localStorage.setItem("email",this.res.email)

    this.list.push(this.res)
    console.log("list",this.list)

  

    // this.deptname= localStorage.getItem("name");
    document.getElementById('id01').style.display='none';

      //  this.showdata=!this.showdata;
      // this.router.navigate(['/home'])
    
  }
  saveProduct():void{
    this.service.save();
   
  }
clear()
{
  this.empform.controls["empname"].setValue("");
  this.empform.controls["id"].setValue("");
  this.empform.controls["dept"].setValue("");
  this.empform.controls["email"].setValue("");
  this.empform.controls["date"].setValue("");

}
delete(id)
{
  debugger
  this.list.splice(id,1)
}
add()
{
  this.clear();
  this.adddetails=!this.adddetails;
  document.getElementById('id01').style.display='block';
  
}
}
