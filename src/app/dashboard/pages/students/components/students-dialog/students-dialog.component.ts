import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent {

  // Controles
  nameFormControl = new FormControl(null);
  surnameFormControl = new FormControl(null);
  emailFormControl = new FormControl(null);
  birthFormControl = new FormControl(null);

  studentFormGroupModel : FormGroup = new FormGroup({
    name : this.nameFormControl,
    surname : this.surnameFormControl,
    email : this.emailFormControl,
    birth : this.birthFormControl
  });

  constructor(private dialogRef: MatDialogRef<any>){}
  
  closeDialog(){
    this.dialogRef.close();
  }
  
  enviarDialog(){
    this.dialogRef.close(this.studentFormGroupModel.value);
  }
}
