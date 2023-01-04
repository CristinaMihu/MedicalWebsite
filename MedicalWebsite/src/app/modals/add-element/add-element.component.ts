import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  doctorForm: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddElementComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.doctorForm = this.formBuilder.group({
      id: ['',Validators.required],
      First_Name: ['',Validators.required],
      Last_Name: ['',Validators.required],
      department: ['',Validators.required],
      LocationDepartmentDoctor: ['',Validators.required],
      Email: ['',Validators.required],
      Mobile: ['',Validators.required]
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

}

