import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {

  dialogTitle : string = "Alta de Curso";
  minDatestartPicker : Date = new Date();

  // Controles
    nameFormControl = new FormControl<string | null>(null, 
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
    );
    priceFormControl = new FormControl<number | null>(null, 
      [
        Validators.required,
        Validators.min(1)
      ]
    );
    descriptionFormControl = new FormControl<string | null>(null, 
      [
        Validators.required, 
        Validators.minLength(10),
        Validators.maxLength(50)      
      ]
    );
    startFormControl = new FormControl<Date | null>(null, 
      [
        Validators.required
      ]
    );
  
    courseFormGroupModel : FormGroup = new FormGroup({
      name : this.nameFormControl,
      price : this.priceFormControl,
      description : this.descriptionFormControl,
      start : this.startFormControl
    });

    constructor(private dialogRef: MatDialogRef<CoursesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data? : ICourse){

        if(data){
          this.nameFormControl.setValue(data.name);
          this.priceFormControl.setValue(data.price);
          this.descriptionFormControl.setValue(data.description);
          this.startFormControl.setValue(data.start);
          this.dialogTitle = "Modificar Curso";
        }
    }

    closeDialog(){
      this.dialogRef.close();
    }
    
    enviarDialog(){
      if(!this.courseFormGroupModel.invalid){
        this.dialogRef.close(this.courseFormGroupModel.value);
      } else {
        this.courseFormGroupModel.markAllAsTouched();
      }

    }
  
    clearForm(){
      this.courseFormGroupModel.reset();
    }
}
