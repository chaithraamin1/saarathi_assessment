import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  empname: any;
  registerForm: FormGroup;

  showdata: boolean = false;
  submitted: boolean = false;
  res: any = [];
  deptname: string;
  list: any = [];

  adddetails: boolean = false;
  empform = this.fb.group({
    empname: ['', Validators.required],
    id: ['', Validators.required],
    dept: ['', Validators.required],
    
    doj: ['', Validators.required],
    email: ['', Validators.required]
  })



  constructor(private fb: FormBuilder, private router: Router, private formBuilder: FormBuilder) {
    
    var modal = document.getElementById('id03');
     window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }

  ngOnInit() {

  }
  submit() {
  
  
    if (this.empform.controls["empname"].valid == false) {
      document.getElementById("empnameError").style.display = 'block';
    }
    else{
      document.getElementById("empnameError").style.display = 'none';
    }
    if (this.empform.controls["dept"].valid == false) {
      document.getElementById("departmentError").style.display = 'block';
    }
    else{
      document.getElementById("departmentError").style.display = 'none';
    }
    if (this.empform.controls["id"].valid == false) {
      document.getElementById("idError").style.display = 'block';
    }
    else{
      document.getElementById("idError").style.display = 'none';
    }
    if (this.empform.controls["doj"].valid == false) {
      document.getElementById("dateError").style.display = 'block';
    }
    else{
      document.getElementById("dateError").style.display = 'none';
    }
    if (this.empform.controls["email"].valid == false) {
      document.getElementById("emailError").style.display = 'block';
    }
    else{
      document.getElementById("emailError").style.display = 'none';
    }
    if(this.empform.invalid)
    {
      return false;
    }
    this.submitted=true;
   

    this.res = this.empform.value;
    this.list.push(this.res)
    console.log("list", this.list)
    
    document.getElementById('id01').style.display = 'none';
  }
  
  clear() {
    this.empform.controls["empname"].setValue("");
    this.empform.controls["id"].setValue("");
    this.empform.controls["dept"].setValue("");
    this.empform.controls["email"].setValue("");
    this.empform.controls["doj"].setValue("");


  }
  delete(id) {
    this.list.splice(id, 1)
  }
  add() {
    this.clear();
    this.adddetails = !this.adddetails;
    document.getElementById('id01').style.display = 'block';

  }
  checkEmpError()
  {
    if (this.empform.controls["empname"].valid == false) {
      document.getElementById("empnameError").style.display = 'block';
    }
    else
    {
       document.getElementById("empnameError").style.display = 'none';
    }
  }
  checkIdError()
  {
    if (this.empform.controls["id"].valid == false) {
      document.getElementById("idError").style.display = 'block';
    }
    else
    {
       document.getElementById("idError").style.display = 'none';
    }
  }
  checkDepartment()
  {
    if (this.empform.controls["dept"].valid == false) {
      document.getElementById("departmentError").style.display = 'block';
    }
    else
    {
       document.getElementById("departmentError").style.display = 'none';
    }
  }
  checkEmail()
  {
    if (this.empform.controls["email"].valid == false) {
      document.getElementById("emailError").style.display = 'block';
    }
    else
    {
       document.getElementById("emailError").style.display = 'none';
    }

  }
  checkDateError()
  {
    if (this.empform.controls["doj"].valid == false) {
      document.getElementById("dateError").style.display = 'block';
    }
    else
    {
       document.getElementById("dateError").style.display = 'none';
    }
  }


}
