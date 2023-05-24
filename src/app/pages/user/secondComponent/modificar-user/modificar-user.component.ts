import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserJsonDataService } from 'src/app/data/user/user-data/user-json-data.service';
import { ObjJSONDatauser } from 'src/app/utilities/interfases/obj-JSONDataUser';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';
import { AppState } from 'src/app/utilities/store/app.reducer';
import { userSelector } from 'src/app/utilities/store/user/user.selector';

@Component({
  selector: 'app-modificar-user',
  templateUrl: './modificar-user.component.html',
  styleUrls: ['./modificar-user.component.css']
})
export class ModificarUserComponent implements OnInit {

  public formuModificarEstudiante!: FormGroup;
  private dataJSONUser: ObjJSONDatauser = {
    data: {
      id: '',
      name: '',
      lastName: '',
      password: '',
      rol: '',
      active: false,
      age: 18,
      courseID: []
    }
  };
  private dataUserID!: string;
  private dataUserName!: string;
  private dataUserLastName!: string;
    private dataStudent!: ObjUsers;

  constructor(private bf: FormBuilder,
            private store: Store<AppState>,
            private dataUserJSON: UserJsonDataService,
            private router: Router) {}

  

  ngOnInit(): void {

    this.formuModificarEstudiante = this.bf.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      age: ['',[Validators.required]],
      active: ['', [Validators.required]],
      courseID: ['',[Validators.required]]
    }); 

    this.store.select(userSelector).subscribe((r) => {
      this.dataJSONUser = r,
      console.log('MODIFICAR USUARIO COMPONENTE'),
      console.log(this.dataJSONUser),
      this.dataUserID = this.dataJSONUser.data.id
    });

    this.dataUserJSON.getDataUserID(this.dataUserID).subscribe(
      (r) => { 
        console.log('GET_ID'),
        console.log(r)
        this.formuModificarEstudiante.patchValue({
          id: this.dataUserID,
          name: r.name,
          lastName: r.lastName,
          age: '22',
          active: r.active,
          courseID: []
        });
      });

 
  }

  submit() {
    this.dataStudent ={
      id: this.formuModificarEstudiante.get('id')?.value,
      name: this.formuModificarEstudiante.get('name')?.value,
      lastName: this.formuModificarEstudiante.get('lastName')?.value,
      password: '',
      rol: 'estudiante',
      active: this.formuModificarEstudiante.get('active')?.value,
      age: parseInt(this.formuModificarEstudiante.get('age')?.value),
      courseID: this.formuModificarEstudiante.get('courseID')?.value
    }

    this.dataUserJSON.putDataUser(this.dataUserID, this.dataStudent).subscribe();
    this.router.navigate(['inicio']);

  }
}
