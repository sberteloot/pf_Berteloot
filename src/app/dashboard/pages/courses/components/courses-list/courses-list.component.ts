import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input()
  arrayCourses : ICourse[] = [];

  @Output()
  onDeleteCourse = new EventEmitter<ICourse>();

  @Output()
  onEditCourse = new EventEmitter<ICourse>();

  @Output()
  onDetailCourse = new EventEmitter<ICourse>();

  displayedColumns: string[] = ['id', 'name', 'price', 'start', 'description', 'actions']; 
}
