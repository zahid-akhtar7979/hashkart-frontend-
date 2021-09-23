import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private baseUrl = 'https://614c1292e4cc2900179eb262.mockapi.io/api/courses/course';

  constructor(private httpClient: HttpClient) { }

  getCourseList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}

interface GetResponse {
    course: Course[];
}

