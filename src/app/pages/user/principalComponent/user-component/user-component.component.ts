import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, Subscription, from, of } from 'rxjs';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';
import { StudentJsonDataService } from 'src/app/data/user/student-data/student-json-data.service';
import { UserJsonDataService } from 'src/app/data/user/user-data/user-json-data.service';
import { ObjJSONDatauser } from 'src/app/utilities/interfases/obj-JSONDataUser';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';

import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';
import { AuthService } from 'src/app/utilities/services/auth/auth.service';
import { LogueoService } from 'src/app/utilities/services/logueo/logueo.service';
import { AppState } from 'src/app/utilities/store/app.reducer';
import { loadIdUser } from 'src/app/utilities/store/user/user.action';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  // private datastudents = new UserDataModule();
  public student!: ObjUsers[];
  private user!: ObjUsers;
  private userId: string = '';
  public semestre!: ObjSemestre;
  private dataJSON!: ObjDataStudent[];
  private suscription!: Subscription;
  public dataObservable!: Observable<ObjStudent[]>;
  private c: number = 0;
  private dataJSONId!: ObjJSONDatauser;
  private dataUser!: ObjUsers;
  private rol: string = 'estudiante';


  constructor(private serviceDataStudent: StudentDataService,
    private dataJSONStudent: StudentJsonDataService,
    private userDataService: UserJsonDataService,
    private authUserService: AuthService,
    private logSessionServices: LogueoService,
    private router: Router,
    private store: Store<AppState>) { }


  ngOnInit(): void {
    // this.suscription = this.dataJSONStudent.getData().subscribe((r: ObjDataStudent[]) => {
    //   this.dataJSON = r,
    //     this.serviceDataStudent.setDataJSON(this.dataJSON),
    //     this.student = this.serviceDataStudent.getDataStudents(),
    //     console.log("componeteUserStudent-subscribe: "),
    //     console.log(this.student)
    // });
    this.serviceDataStudent.resetDataStudent([]);
    if (this.authUserService.getSession()) {
      this.suscription = this.userDataService.getDataUsers().subscribe(
        (r: ObjUsers[]) => {
          from(r).subscribe(     //Se recorre el objeto traido del API
            {
              next: value => {
                if (value.rol === this.rol) {
                  this.serviceDataStudent.setDataStudent.subscribe(
                    (obj: ObjUsers[]) => {
                      console.log('ArrayStudent', this.serviceDataStudent.getStudent()),
                        console.log('USER COMPONENT value'),
                        console.log(value),
                        console.log('USER COMPONENT obj'),
                        console.log(obj),
                        obj.push(value),
                        console.log(obj),
                        console.log('ArrayStudent', this.serviceDataStudent.getStudent()),
                        this.student = obj
                    });
                }
              },
              error: err => console.error('ERROR: ', err),
              complete: () => console.info('ok')
            });
        });
    }
    this.userId = this.logSessionServices.getInfoSession().get('id')?.value;
    this.suscription = this.userDataService.getDataUserID(this.userId).subscribe( 
      (r: ObjUsers) => 
      {of(r).subscribe(
        {
          next: value => {
            this.serviceDataStudent.setDataStudent.subscribe(
              (obj: ObjUsers[]) => {
                  obj.push(value),
                  this.student = obj
              });
          },
          error: err => console.log('err: ', err),
          complete: () => console.log('ok'),
        }
      );
        // this.user = r,
        // console.log('Student'),
        // console.log(this.user),
        // this.student.push(this.user)
      });
     
 

    //  this.serviceDataStudent.getStudent.subscribe(
    //   (r) => this.student = r
    //  );

  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


  displayedColumns = [
    'id',
    'firstname',
    'lastname',
    'age',
    'active',
    'course',
    'edit',
    'delete',
  ];

  delete(id: string) {
    if (this.authUserService.getSession()) {
      this.userDataService.deleteDataUser(id).subscribe();
      this.router.navigate(['inicio']);
    }else{
      console.log('BORRAR COMPONENT');
      this.router.navigate(['usuarios/borrar']);
    }
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
      courseID: []
    };

    this.dataJSONId = {
      data: this.dataUser
    }
    console.log('user component: ', this.dataJSONId);
    this.store.dispatch(loadIdUser({ data: this.dataJSONId }));
  }


}


