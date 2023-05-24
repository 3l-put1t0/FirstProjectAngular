import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserJsonDataService } from 'src/app/data/user/user-data/user-json-data.service';
import { ObjUsers } from 'src/app/utilities/interfases/obj-users';
import { AuthService } from 'src/app/utilities/services/auth/auth.service';
import { LogueoService } from 'src/app/utilities/services/logueo/logueo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Variables
  //Se declara la variable para iniciar la transacción de información, entre el formulario y su logica
  public formuLogin!: FormGroup;
  private userActive: boolean = false;
  // ({
  //   nombre: new FormControl('');
  //   apellido: new FormControl('');
  // });

  //Se crea una instancia para la parte logica del formulario
  constructor(
    private fb: FormBuilder,
    private logueoServices: LogueoService,
    private authService: AuthService,
    private dataUserServices: UserJsonDataService,
  ) { }

  ngOnInit(): void {
    this.formuLogin = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  //Función donde se anida el contenido del formulario
  submit(): void {

    this.dataUserServices.getDataUserID(this.formuLogin.get('id')?.value).subscribe(
      (r: ObjUsers) => {
        console.log("LOGIN COMPONENT"),
        console.log(r),
        this.userActive = r.active;
        this.logueoServices.setActive(this.userActive);
        console.log("datosValide: " + this.formuLogin.valid);
        this.logueoServices.setInfoSession(this.formuLogin);
        console.log("Existe?: " + this.logueoServices.getConfirmSession());
        this.authService.getSession();
        console.log("Usuario Administrador?: " + this.authService.getSession());
      });

  }
}
