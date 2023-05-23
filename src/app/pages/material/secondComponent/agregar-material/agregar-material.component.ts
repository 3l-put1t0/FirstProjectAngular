import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseDataJsonService } from 'src/app/data/material/material-data/course-data-json.service';
import { ObjDataCourse } from 'src/app/utilities/interfases/obj-dataCourse';

@Component({
  selector: 'app-agregar-material',
  templateUrl: './agregar-material.component.html',
  styleUrls: ['./agregar-material.component.css']
})
export class AgregarMaterialComponent {
  
  public formuAgregarMaterial!: FormGroup;
  private dataCourse!: ObjDataCourse;
  
  constructor(private dataCourseJSON: CourseDataJsonService,
              private fb: FormBuilder,
              private router: Router ){
  }  

  ngOnInit(): void{
    this.formuAgregarMaterial = this.fb.group({
      id: ['',[Validators.required, Validators.minLength(3)]],
      name: ['',[Validators.required]],
    });
  }
  public submit(){
    
    this.dataCourse ={
      id: this.formuAgregarMaterial.get('id')?.value,
      name: this.formuAgregarMaterial.get('name')?.value,
    }
    this.dataCourseJSON.postDataCourse(this.dataCourse).subscribe();  
    this.router.navigate(['inicio']);
  }

}
