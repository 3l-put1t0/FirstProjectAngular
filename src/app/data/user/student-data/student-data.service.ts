import { Injectable } from '@angular/core';
import { ObjDataStudent } from 'src/app/utilities/interfases/obj-dataStudent';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';
import { UserDataService } from '../user-data/user-data.service';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private dataSubject: BehaviorSubject<ObjStudent[]> = new BehaviorSubject<ObjStudent[]>([]);
  // public data$: Observable<ObjStudent[]> = this.dataSubject.asObservable();


  

  public setDataJSON(data: ObjDataStudent[]): void {
    this.dataJSON = data; 
  }

  private getDataJSON(): ObjDataStudent[]{
    return this.dataJSON;
  }

  private changeDataStudent(): void {    
    // let dataStudent: ObjStudent;
    for (const i of this.dataUserService.getUsers()) {
      for (const j of this.getDataJSON()) {
        if (i.id === j.id) {
          this.daaataStudent = {
            id: i.id,
            name: i.name,
            lastName: i.lastName,
            age: j.age,
            course: j.courseID
          }

          this.dataStudents = this.dataSubject.getValue();
          this.dataStudents.push(this.daaataStudent);
          this.dataSubject.next(this.dataStudents);          
        }
        
    }
  }
}


  public getDataStudents(): ObjStudent[] {
    this.changeDataStudent();
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
}
