import { Component } from '@angular/core';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';

import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  // private datastudents = new UserDataModule();
  public student!: ObjStudent[];
  public semestre!: ObjSemestre;

  constructor(private serviceDataStudent: StudentDataService, 
              private serviceDataSemestres: SemestreDataService) {
    this.student = this.serviceDataStudent.getDataStudents();
    this.semestre = this.serviceDataSemestres.getDataSemesterId("S01");
    console.log(this.student);
    console.log(this.semestre);
  }


  displayedColumns = [
    'id',
    'firstname',
    'lastname',
    'age',
    'semester',
    'active',
    'course',
    'edit',
    'delete',
  ];
}
