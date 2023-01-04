import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctors } from 'src/app/my-favorites/my-favorites.component';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css']
})
export class EditElementComponent implements OnInit {

  doctorForm: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctors) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.doctorForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      First_Name: [this.data.First_Name, Validators.required],
      Last_Name: [this.data.Last_Name, Validators.required],
      department: [this.data.department, Validators.required],
      LocationDepartmentDoctor: [this.data.LocationDepartmentDoctor, Validators.required],
      Email: [this.data.Email, Validators.required],
      Mobile: [this.data.Mobile, Validators.required],
    })

    console.log(this.data);
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
