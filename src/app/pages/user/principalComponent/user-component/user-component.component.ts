import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';
import { StudentJsonDataService } from 'src/app/data/user/student-data/student-json-data.service';
import { UserJsonDataService } from 'src/app/data/user/user-data/user-json-data.service';
import { ObjJSONDatauser } from 'src/app/utilities/interfases/obj-JSONDataUser';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';

import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';
import { AppState } from 'src/app/utilities/store/app.reducer';
import { loadIdUser } from 'src/app/utilities/store/user/user.action';

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
  private c: number = 0;
  private dataJSONId!: ObjJSONDatauser;
  private dataUser!: ObjUsers;


  constructor(private serviceDataStudent: StudentDataService,
    private dataJSONStudent: StudentJsonDataService,
    private userData: UserJsonDataService,
    private router: Router,
    private store: Store<AppState>) { }


  ngOnInit(): void {
    this.suscription = this.dataJSONStudent.getData().subscribe((r: ObjDataStudent[]) => {
      this.dataJSON = r,
        this.serviceDataStudent.setDataJSON(this.dataJSON),
        this.student = this.serviceDataStudent.getDataStudents(),
        console.log("componeteUserStudent-subscribe: "),
        console.log(this.student)
    });
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

  delete(id: string) {
    this.userData.deleteDataUser(id).subscribe();
    this.router.navigate(['inicio']);
  }

  modify(id: string) {
    this.dataUser = {
      id: id,
      name: '',
      lastName: '',
      password: '',
      rol: '',
      active: false,
      age: 18,
      couserID: []
    };

    this.dataJSONId = {
      data: this.dataUser
    }
    console.log('user component: ', this.dataJSONId);
    this.store.dispatch(loadIdUser({ data: this.dataJSONId }));
  }
}


