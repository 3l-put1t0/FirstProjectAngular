import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';
import { ObjStudent } from 'src/app/utilities/interfases/obj-student';


@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit, OnDestroy {

  public formuAgregarEstudiante!: FormGroup;
  private dataUser!: ObjStudent;

  constructor(private fb: FormBuilder,
              private serviceStudent: StudentDataService,
              private router: Router){}

  ngOnInit(): void{
    this.formuAgregarEstudiante = this.fb.group({
      id: ['',[Validators.required, Validators.minLength(5)]],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      age: ['',[Validators.required]],
      courseID: ['',[Validators.required]]
    });
  }

  ngOnDestroy(): void{
    console.log('destruido');
   
  }

  public submit(){
    this.dataUser ={
      id: this.formuAgregarEstudiante.get('id')?.value,
      name: this.formuAgregarEstudiante.get('name')?.value,
      lastName: this.formuAgregarEstudiante.get('lastName')?.value,
      age: this.formuAgregarEstudiante.get('age')?.value,
      course: this.formuAgregarEstudiante.get('courseID')?.value,
    }
    
    this.serviceStudent.addStudent(this.dataUser);
    console.log('submit');    
    this.router.navigate(['inicio']);
  }

}
