import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

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
    passwordFormControl = new FormControl<string | null>(null, 
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15)
      ]
    );
  
    userFormGroupModel : FormGroup = new FormGroup({
      name : this.nameFormControl,
      surname : this.surnameFormControl,
      email : this.emailFormControl,
      password : this.passwordFormControl
    });
  
    dialogTitle : string = "Nuevo Usuario";
  
    constructor(private dialogRef: MatDialogRef<UserDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data? : IUser){

        if(data){
          this.nameFormControl.setValue(data.name);
          this.surnameFormControl.setValue(data.surname);
          this.emailFormControl.setValue(data.email);
          this.passwordFormControl.setValue(data.password);
          this.dialogTitle = "Modificar Usuario";
        }
    }

    closeDialog(){
      this.dialogRef.close();
    }
    
    enviarDialog(){
      if(!this.userFormGroupModel.invalid){
        this.dialogRef.close(this.userFormGroupModel.value);
      } else {
        this.userFormGroupModel.markAllAsTouched();
      }
    }
  
    clearForm(){
      this.userFormGroupModel.reset();
    }

}
