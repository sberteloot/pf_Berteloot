import { Component } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { CoursesService } from '../courses/courses.service';
import { UsersService } from '../users/users.service';
import { InscriptionsService } from '../inscriptions/inscriptions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  studentsCount:number = 0;
  coursesCount:number = 0;
  usersCount:number = 0;
  inscriptionsCount = 0;

  constructor(private studentsService:StudentsService,
              private coursesService:CoursesService,
              private usersService:UsersService,
              private inscriptionsService:InscriptionsService){
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
    });
    
    this.usersService.loadUsers();
    this.usersService.getUsers().subscribe({
      next : (arrayUsers) =>{
        this.usersCount = arrayUsers.length
      }
    });

    this.inscriptionsService.getInscriptions().subscribe({
      next : (arrayInscriptions) =>{
        this.inscriptionsCount = arrayInscriptions.length
      }
    });

  }

}
