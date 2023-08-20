import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../../students/models/student';
import { Observable } from "rxjs";
import { ICourse } from '../../../courses/models/course';
import { StudentsService } from '../../../students/students.service';
import { CoursesService } from '../../../courses/courses.service';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrls: ['./inscription-dialog.component.scss']
})
export class InscriptionDialogComponent {

  studentIdFormControl = new FormControl<number | null>(null, [Validators.required]);
  courseIdFormControl = new FormControl<number | null>(null, [Validators.required]);

  inscriptionFormGroup = new FormGroup({
    studentId : this.studentIdFormControl,
    courseId : this.courseIdFormControl
  })

  students$ : Observable<IStudent[]>;
  courses$ : Observable<ICourse[]>;

  constructor(private dialogRef: MatDialogRef<InscriptionDialogComponent>,
              private studentsService: StudentsService,
              private coursesService: CoursesService){
    this.studentsService.loadStudents();
    this.students$ = this.studentsService.getStudents();

    this.coursesService.loadCourses();
    this.courses$ = this.coursesService.getCourses();
  }

  clearForm() : void{
    this.inscriptionFormGroup.reset();
  }

  closeDialog(){
    this.dialogRef.close();
  }

  enviarDialog() : void{

  }

}
