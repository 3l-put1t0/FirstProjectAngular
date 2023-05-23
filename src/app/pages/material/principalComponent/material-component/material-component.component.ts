import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CourseDataJsonService } from 'src/app/data/material/material-data/course-data-json.service';
import { MaterialDataService } from 'src/app/data/material/material-data/material-data.service';
import { SemestreDataService } from 'src/app/data/material/material-data/semestre-data.service';
import { ObjCourse } from 'src/app/utilities/interfases/obj-course';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';
import { ObjSemestre } from 'src/app/utilities/interfases/obj-semestre';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';
import { AppState } from 'src/app/utilities/store/app.reducer';
import { loadIdCourse } from 'src/app/utilities/store/course/course.action';

@Component({
  selector: 'app-material-component',
  templateUrl: './material-component.component.html',
  styleUrls: ['./material-component.component.css']
})
export class MaterialComponentComponent implements OnInit {

  public materias!: ObjDataCourse[];
  private dataCourse!: ObjDataCourse[];
  private contador: number = 0;
  private suscripton!: Subscription;
  private id_material!: string;
  private name_material!: string;
  private course: ObjDataCourse = {
    id:'',
    name:''
  };
  private dataId!: ObjCourse;

 

  constructor(private courseDataService: MaterialDataService,
    private dataCourseJSON: CourseDataJsonService,
    private router: Router,
    private store: Store<AppState>) {      
  }

  ngOnInit(): void {
    this.suscripton = this.dataCourseJSON.getDataCourse().subscribe(
      (r: ObjDataCourse[]) => {
        this.materias = r,
        this.courseDataService.setDataJSON(this.materias)     

      });
    
    
  }



  displayedColumns = [
    'id',
    'name',
    'edit',
    'delete',
  ];

  ngOnDestroy(): void {
    this.suscripton.unsubscribe();
  }

  delete(id: string){
    this.dataCourseJSON.deleteDataCourse(id).subscribe();
    this.router.navigate(['inicio']);
  }

  modify(id: string, name: string){
    this.id_material = id;
    this.name_material = name;
    this.course = {
      id: this.id_material,
      name: this.name_material
    }
    console.log('----- ',this.course);

    this.dataId = {
      data: this.course
    };
    
    this.store.dispatch(loadIdCourse({ data: this.dataId}));
  }
}
