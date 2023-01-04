import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddElementComponent } from '../modals/add-element/add-element.component';
import { EditElementComponent } from '../modals/edit-element/edit-element.component';

export interface Doctors {
  id: number;
  First_Name: string;
  Last_Name: string;
  department: string;
  LocationDepartmentDoctor: string;
  Email: string;
  Mobile: string;
}

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})

export class MyFavoritesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'First_Name', 'Last_Name', 'department','LocationDepartmentDoctor','Email','Mobile'];
  myList: Doctors[] = [
    {id: 1, First_Name: 'Robert', Last_Name: "Anderson", department: "Diagnostic Imaging", LocationDepartmentDoctor:"London, Brick Street, no. 147", Email:"robertand2yahoo.com", Mobile:"0732427441" },
    {id: 2, First_Name: 'Kathryn', Last_Name: "Barlow", department: "Ophthalmology", LocationDepartmentDoctor:"Manchester, Kingsway Street, no. 158", Email:"kathy123@gmail.com", Mobile:"0787508395" },
    {id: 3, First_Name: 'Julie', Last_Name: "Cronk", department: "Gastroenterology", LocationDepartmentDoctor:"Nottingham, Aberfort Avenue, no. 85", Email:"julieC@yahoo.com", Mobile:"0787774953" },
    {id: 4, First_Name: 'Noel', Last_Name: "Hauge", department: "Sexual Health", LocationDepartmentDoctor:"Manchester, Kingsway Street, no. 158", Email:"haugenoel@gmail.com", Mobile:"0767613058" },
    {id: 5, First_Name: 'Tania', Last_Name: "Sale", department: "Rheumatology", LocationDepartmentDoctor:"London, Brick Street, no. 147", Email:"taniasale@gmail.com", Mobile:"0754643332" }
];
  dataSource = new MatTableDataSource(this.myList);
  doctorForm: FormGroup = new FormGroup({});

  firstNameSearchValue!: string;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.doctorForm = this.formBuilder.group({
      id: [''],
      First_Name: [''],
      Last_Name: [''],
      department: [''],
      LocationDepartmentDoctor: [''],
      Email: [''],
      Mobile: ['']
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onRowClick(row: Doctors){
    console.log(row);
  }

  onAdd(){
    this.myList.push(this.doctorForm.value);
    this.dataSource.data = this.myList;
  }

  onDelete(row: Doctors){
    const index = this.myList.indexOf(row);

    if (index > -1) {
      this.myList.splice(index, 1);
      this.dataSource.data = this.myList;
    }
  }

  searchByFirstName(){
    this.dataSource.data = this.myList.filter(e => e.First_Name.toLowerCase() == this.firstNameSearchValue.toLowerCase());
  }

  clearFirstNameSearch(){
    this.firstNameSearchValue = '';
    this.dataSource.data = this.myList;
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(AddElementComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if(result){
        this.myList.push(result.value);
        this.dataSource.data = this.myList;
      }
      
    });
  }

  onEdit(row: Doctors){

      const dialogRef = this.dialog.open(EditElementComponent, {
        width: '250px',
        data: row
      });
  
      dialogRef.afterClosed().subscribe(result => {
        const index = 
        this.myList.splice(result.position,1);
        
      });
  }
}