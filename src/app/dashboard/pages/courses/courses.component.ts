import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './models/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  arrayCourses : Observable<ICourse[]>;

  constructor(private coursesService:CoursesService){
    this.coursesService.loadCourses();
    this.arrayCourses = this.coursesService.getCourses();    
  }

}