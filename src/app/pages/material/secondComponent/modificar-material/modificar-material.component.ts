import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseDataJsonService } from 'src/app/data/material/material-data/course-data-json.service';
import { ObjCourse } from 'src/app/utilities/interfases/obj-course';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';
import { AppState } from 'src/app/utilities/store/app.reducer';
import { courseSelector, courseStateSelector } from 'src/app/utilities/store/course/course.selector';

@Component({
  selector: 'app-modificar-material',
  templateUrl: './modificar-material.component.html',
  styleUrls: ['./modificar-material.component.css']
})
export class ModificarMaterialComponent {
  public formuModificarMaterial!: FormGroup;
  private arrayDataCourse: ObjCourse = {
    data: {
      id: '',
      name: ''
    }
  };
  private dataCourse: ObjDataCourse = {
    id: '',
    name: ''
  }

  
  constructor(private dataCourseJSON: CourseDataJsonService,
              private fb: FormBuilder,
              private router: Router,
              private store: Store<AppState> ){
               
  }  

  ngOnInit(): void{
    this.formuModificarMaterial = this.fb.group({
      id: ['',[Validators.required, Validators.minLength(5)]],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      age: ['',[Validators.required]],
      courseID: ['',[Validators.required]]
    });
    
    this.store.select(courseSelector)
    .subscribe((r) => {
      this.arrayDataCourse = r,
      this.dataCourse = this.arrayDataCourse.data;
      console.log('MODIFICAR MATERIA COMPONENTE'),
      console.log(this.arrayDataCourse)
      console.log(this.dataCourse)
      
    });

    this.formuModificarMaterial.patchValue(this.dataCourse);
  }
  public submit(){

    this.dataCourse ={
      id: this.formuModificarMaterial.get('id')?.value,
      name: this.formuModificarMaterial.get('name')?.value,
    }
    
    // this.dataCourseJSON.getDataCourseID(this.id).subscribe();    
    // this.dataCourse ={
    //   id: this.formuModificarMaterial.get('id')?.value,
    //   name: this.formuModificarMaterial.get('name')?.value,
    // }
    this.dataCourseJSON.putDataCourse(this.dataCourse.id, this.dataCourse).subscribe();  
    this.router.navigate(['inicio']);
  }
}
