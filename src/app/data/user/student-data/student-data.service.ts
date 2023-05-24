import { Injectable } from '@angular/core';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';
import { UserDataService } from '../user-data/user-data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private dataUserService: UserDataService) { }

  // public dataStudents!: ObjStudent[];
  public dataStudents!: ObjStudent[];
  private dataStudent!: ObjStudent;
  private dataJSON!: ObjDataStudent[];
  private daaataStudent: ObjStudent = {

    id: '',
    name: '',
    lastName: '',
    age: 0,
    course: []
  };
  private dataAdd: ObjStudent[] = [];
  private student: ObjUsers[] = [
    // {
    //   id: "",
    //   name: "",
    //   lastName: "",
    //   password: "",
    //   rol: "",
    //   active: false,
    //   age: 18,
    //   couserID: []
    // }
  ];

  // public data$: Observable<ObjStudent[]> = this.dataSubject.asObservable();  

  public setDataJSON(data: ObjDataStudent[]): void {
    this.dataJSON = data;
    this.changeDataStudent();
  }

  private getDataJSON(): ObjDataStudent[] {
    return this.dataJSON;
  }

  private changeDataStudent(): void {
    // let dataStudent: ObjStudent;   
    const dataSubject: BehaviorSubject<ObjStudent[]> = new BehaviorSubject<ObjStudent[]>([]);
    console.log("*****************");
    console.log(dataSubject.complete());
    console.log(dataSubject.getValue());

    let c: number = 0;
    for (const i of this.dataUserService.getUsers()) {
      for (const j of this.getDataJSON()) {
        if (i.id === j.id) {
          c++;
          this.daaataStudent = {
            id: i.id,
            name: i.name,
            lastName: i.lastName,
            age: j.age,
            course: j.courseID
          }

          console.log('getValue: ');
          console.log(dataSubject.getValue());
          this.dataStudents = dataSubject.getValue();
          this.dataStudents.push(this.daaataStudent);
          console.log("c: " + c);
          if (c === this.getDataJSON().length) {
            for (const i of this.dataAdd) {
              this.dataStudents.push(i);
            }
          }

          console.log('next: ');
          console.log(dataSubject.next(this.dataStudents));
          dataSubject.next(this.dataStudents);

        }

      }

    }
  }


  public getDataStudents(): ObjStudent[] {
    return this.dataStudents;
  }

  public getDataStudentID(id: string): ObjStudent {
    for (const i of this.getDataStudents()) {
      if (id === i.id) {
        this.dataStudent = i;
      }
    }
    return this.dataStudent;
  }

  public addStudent(data: ObjStudent): void {
    this.dataAdd.push(data);
  }

  public setDataStudent: Observable<ObjUsers[]> = new Observable<ObjUsers[]>(
    (subscriber) => {
      subscriber.next(this.student);
    }
  );

  public getStudent(): ObjUsers[]{
    return this.student;
  }

  public resetDataStudent(obj: ObjUsers[]): void{
    this.student = obj;
  }

  //   public getStudent: Observable<ObjUsers[]> = new Observable<ObjUsers[]>(
  //   (subscriber) => {
  //     subscriber.next(this.student);
  //   }
  // );
}
