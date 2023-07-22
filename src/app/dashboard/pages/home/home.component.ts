import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  studentsCount:number = 0;
  coursesCount:number = 0;

  constructor(private studentsService:StudentsService,
              private coursesService:CoursesService){
    this.studentsService.loadStudents();
    this.studentsService.getStudents().subscribe({
      next : (arrayStudents) =>{
        this.studentsCount = arrayStudents.length
      }
    });

    this.coursesService.loadCourses();
    this.coursesService.getCourses().subscribe({
      next : (arrayCourses) =>{
        this.coursesCount = arrayCourses.length
      }
    })    
  }

}
