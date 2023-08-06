import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../models/student';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit {

  // Controles
  nameFormControl = new FormControl<string | null>(null, 
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]
  );
  surnameFormControl = new FormControl<string | null>(null, 
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)      
    ]
  );
  emailFormControl = new FormControl<string | null>(null, 
    [
      Validators.required, 
      Validators.email,
      Validators.minLength(10),
      Validators.maxLength(50)      
    ]
  );
  birthFormControl = new FormControl<Date | null>(null, 
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
  dialogTitle : string = "Nuevo Estudiante";

  constructor(private dialogRef: MatDialogRef<StudentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data? : IStudent){

                if(data){
                  this.nameFormControl.setValue(data.name);
                  this.surnameFormControl.setValue(data.surname);
                  this.emailFormControl.setValue(data.email);
                  this.birthFormControl.setValue(data.birth);
                  this.dialogTitle = "Modificar Estudiante";
                }
            }

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
    else{
      this.studentFormGroupModel.markAllAsTouched();
    }
  }

  clearForm(){
    this.studentFormGroupModel.reset();
  }
}
