import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../../students/models/student';
import { Observable } from "rxjs";
import { ICourse } from '../../../courses/models/course';
import { StudentsService } from '../../../students/students.service';
import { CoursesService } from '../../../courses/courses.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';
import { selectCourses, selectStudents } from '../../store/inscription.selectors';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrls: ['./inscription-dialog.component.scss']
})
export class InscriptionDialogComponent implements OnInit {

  studentIdFormControl = new FormControl<number | null>(null, [Validators.required]);
  courseIdFormControl = new FormControl<number | null>(null, [Validators.required]);

  inscriptionFormGroup = new FormGroup({
    studentId : this.studentIdFormControl,
    courseId : this.courseIdFormControl
  })

  students$ : Observable<IStudent[]>;
  courses$ : Observable<ICourse[]>;

  constructor(private dialogRef: MatDialogRef<InscriptionDialogComponent>,
              private store: Store){
    this.students$ = store.select(selectStudents);
    this.courses$ = store.select(selectCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadStudents());
    this.store.dispatch(InscriptionActions.loadCourses());
  }              

  clearForm() : void{
    this.inscriptionFormGroup.reset();
  }

  closeDialog(){
    this.dialogRef.close();
  }

  enviarDialog() : void{
    if(!this.inscriptionFormGroup.invalid){
      //this.dialogRef.close(this.studentFormGroupModel.value);
    }
    else{
      this.inscriptionFormGroup.markAllAsTouched();
    }
  }

}
