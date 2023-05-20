import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class UserJsonDataService {

  private URL: string = 'assets/user.json';

  constructor(private http:HttpClient) {}

  public getData(){
    return this.http.get<ObjUsers[]>(this.URL);
  }
}
