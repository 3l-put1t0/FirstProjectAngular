import { Injectable } from '@angular/core';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  public dataStudents: ObjStudent[] = [
    {
      id: 'A00',
      name: 'Juan',
      lastname: 'Saldaña',
      age: 25,
      semester: 10,
      active: true,
      course: ['Auto', 'Robótica', 'Circuitos']
    },
    {
      id: 'B00',
      name: 'Miguel',
      lastname: 'Saldaña',
      age: 22,
      semester: 8,
      active: true,
      course: ['Infraestructura', 'Lógica Matematíca', 'Arquitectura']
    }
  ];

  public getDataStudents(): ObjStudent[]{
    return this.dataStudents;
  }
  
  
}
