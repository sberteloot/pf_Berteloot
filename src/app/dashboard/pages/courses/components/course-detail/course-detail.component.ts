import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { ICourse } from '../../models/course';
import { take } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {

  course: ICourse | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
  ) {
    if (!Number(this.activatedRoute.snapshot.params['id'])) {
      this.router.navigate(['dashboard', 'courses']);
      //this.notification.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID valido`);
    } else {
      this.getCourse(Number(this.activatedRoute.snapshot.params['id']));
    }
  }

  getCourse(id : number) : void{
    this.coursesService.loadCourses();    
    this.coursesService.getCuurseById(id).subscribe({
      next: (course) => {
        this.course = course
      }
    })
  }

}
