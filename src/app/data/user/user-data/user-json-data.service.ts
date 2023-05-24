import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class UserJsonDataService {

  private _URL: string = 'https://646ad4ff7d3c1cae4ce2d06b.mockapi.io';
  private endPoint: string = "/users";

  constructor(private http:HttpClient) {}

  public getDataUsers(){
    return this.http.get<ObjUsers[]>(`${this._URL}${this.endPoint}`);
  }

  public getDataUserID(id: string){
    return this.http.get<ObjUsers>(`${this._URL}${this.endPoint}/${id}`);
  }

  public putDataUser(id: string, data: ObjUsers){
    return this.http.put<ObjUsers[]>(`${this._URL}${this.endPoint}/${id}`, data);
  }

  public postDataUser(data: ObjUsers){
    return this.http.post<ObjUsers[]>(`${this._URL}${this.endPoint}`, data);
  }

  public deleteDataUser(id: string){
    return this.http.delete<ObjUsers>(`${this._URL}${this.endPoint}/${id}`);
  }
}
