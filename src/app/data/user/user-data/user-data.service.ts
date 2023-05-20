import { Injectable } from '@angular/core';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // private URL: string = 'assets/user.json';
  private dataUsers!: ObjUsers[];
  private user: ObjUsers =
  {
    id: '',
    name: '',
    lastName: '',
    rol: '',
    active: false,
    password: ''
  };

  public setUsers(users: ObjUsers[]): void{
    this.dataUsers = users;
  }
  
  public getUsers(): ObjUsers[] {
    return this.dataUsers;
  }

  public getUsersId(id: string): ObjUsers {
    for (const i of this.dataUsers) {
      if (i.id === id) {
        this.user = i;
      }
    }
    return this.user;
  }





}
