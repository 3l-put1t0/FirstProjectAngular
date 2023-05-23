import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';

@Injectable({
  providedIn: 'root'
})
export class CourseDataJsonService {

  private _URL: string = 'https://646ad4ff7d3c1cae4ce2d06b.mockapi.io';
  private endPoint: string = "/course";

  constructor(private http: HttpClient) { }

  public getDataCourse(){
    return this.http.get<ObjDataCourse[]>(`${this._URL}${this.endPoint}`);
  }

  public getDataCourseID(id: string){
    return this.http.get<ObjDataCourse>(`${this._URL}${this.endPoint}/${id}`);
  }

  public putDataCourse(id: string, data: ObjDataCourse){
    return this.http.put<ObjDataCourse[]>(`${this._URL}${this.endPoint}/${id}`, data);
  }

  public postDataCourse(data: ObjDataCourse){
    return this.http.post<ObjDataCourse[]>(`${this._URL}${this.endPoint}`, data);
  }

  public deleteDataCourse(id: string){
    return this.http.delete<ObjDataCourse[]>(`${this._URL}${this.endPoint}/${id}`);
  }
}
