import { Injectable } from '@angular/core';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private dataUsers: ObjUsers[] = [
    {
      id: 'Ad-00A',
      name: 'Juan',
      lastName: 'Saldaña',
      password: 'A-1234',
      rol: 'administrador',
      active: true
    },
    {
      id: 'Ad-00B',
      name: 'Miguel',
      lastName: 'Saldaña',
      password: '1234d-00B',
      rol: 'administrador',
      active: true
    },
    {
      id: 'St-00A',
      name: 'Camila',
      lastName: 'Rodriguez',
      password: 'B-1234',
      rol: 'estudiante',
      active: true
    },
    {
      id: 'St-00B',
      name: 'Juan',
      lastName: 'Castro',
      password: '1234t-00B',
      rol: 'estudiante',
      active: true
    },
    {
      id: 'St-00C',
      name: 'Juliana',
      lastName: 'Cuervo',
      password: '1234t-00C',
      rol: 'estudiante',
      active: true
    },
    {
      id: 'St-00D',
      name: 'Miguel',
      lastName: 'Castro',
      password: '1234t-00D',
      rol: 'estudiante',
      active: true
    },
    {
      id: 'St-00E',
      name: 'Carlos',
      lastName: 'Castro',
      password: '1234t-00E',
      rol: 'estudiante',
      active: false
    },
    {
      id: 'St-00F',
      name: 'Laura',
      lastName: 'Rodriguez',
      password: '1234t-00F',
      rol: 'estudiante',
      active: false
    }
  ];

  private user: ObjUsers =
    {
      id: '',
      name: '',
      lastName: '',
      rol: '',
      active: false,
      password: ''
    };



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
