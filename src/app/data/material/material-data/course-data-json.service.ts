import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';

@Injectable({
  providedIn: 'root'
})
export class CourseDataJsonService {

  private URL: string = 'assets/courses.json';

  constructor(private http: HttpClient) { }

  public getDataJSON(){
    return this.http.get<ObjDataCourse[]>(this.URL);
  }
}
