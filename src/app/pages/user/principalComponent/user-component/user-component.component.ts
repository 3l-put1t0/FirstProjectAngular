import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';
import { StudentJsonDataService } from 'src/app/data/user/student-data/student-json-data.service';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';

import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  // private datastudents = new UserDataModule();
  public student!: ObjStudent[];
  public semestre!: ObjSemestre;
  private dataJSON!: ObjDataStudent[];
  private suscription!: Subscription;
  public dataObservable!: Observable<ObjStudent[]>;


  constructor(private serviceDataStudent: StudentDataService,
              private dataJSONStudent: StudentJsonDataService) 
  {
    console.log("componeteUserStudent: " + this.student);
    this.suscription = this.dataJSONStudent.getData().subscribe((r: ObjDataStudent[]) => {
      this.dataJSON = r,
      this.serviceDataStudent.setDataJSON(this.dataJSON);
      this.student =this.serviceDataStudent.getDataStudents();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


  displayedColumns = [
    'id',
    'firstname',
    'lastname',
    'age',
    'course',
    'edit',
    'delete',
  ];
}


