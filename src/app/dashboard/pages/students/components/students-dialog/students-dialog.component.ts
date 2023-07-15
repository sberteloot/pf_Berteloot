import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {

  // Controles
  nameFormControl = new FormControl(null, 
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]
  );
  surnameFormControl = new FormControl(null, 
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)      
    ]
  );
  emailFormControl = new FormControl(null, 
    [
      Validators.required, 
      Validators.email,
      Validators.minLength(10),
      Validators.maxLength(50)      
    ]
  );
  birthFormControl = new FormControl(null, 
    [
      Validators.required
    ]
  );

  studentFormGroupModel : FormGroup = new FormGroup({
    name : this.nameFormControl,
    surname : this.surnameFormControl,
    email : this.emailFormControl,
    birth : this.birthFormControl
  });

  maxDateBirthPicker : Date = new Date();
  
  constructor(private dialogRef: MatDialogRef<any>){}

  ngOnInit() {
    this.maxDateBirthPicker.setFullYear(this.maxDateBirthPicker.getFullYear() - 12);
  }
  
  closeDialog(){
    this.dialogRef.close();
  }
  
  enviarDialog(){
    if(!this.studentFormGroupModel.invalid){
      this.dialogRef.close(this.studentFormGroupModel.value);
    }
  }

  clearForm(){
    this.studentFormGroupModel.reset();
  }
}
