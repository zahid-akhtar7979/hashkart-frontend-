import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] | undefined;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.courseService.getCourseList().subscribe(
      data => {
        this.courses = data;
      }
    )
  }
}
