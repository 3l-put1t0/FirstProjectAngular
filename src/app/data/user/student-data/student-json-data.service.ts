import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentJsonDataService {

  private URL: string = 'assets/student.json';

  constructor(private http: HttpClient) {}

  public getData(){
    return this.http.get<ObjDataStudent[]>(this.URL);
  }
}
