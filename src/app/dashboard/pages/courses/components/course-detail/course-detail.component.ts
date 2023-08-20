import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { ICourse } from '../../models/course';
import { NotifierService } from 'src/app/core/services/notifier.service';
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
    private notifier: NotifierService
  ) {
    if (!Number(this.activatedRoute.snapshot.params['id'])) {
      this.router.navigate(['dashboard', 'courses']);
      this.notifier.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID valido`);
    } else {
      this.getCourse(Number(this.activatedRoute.snapshot.params['id']));
    }
  }

  getCourse(id : number) : void{
    this.coursesService.loadCourses();    
    this.coursesService.getCuurseById(id).pipe(take(1)).subscribe({
      next: (course) => {
        if(course==undefined){
          this.notifier.showError("No se encontró el curso con el id " + id);
          this.router.navigate(['dashboard', 'courses']);
        } else {
          this.course = course
        }
      }
    })
  }

}
