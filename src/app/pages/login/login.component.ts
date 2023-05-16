import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    // ({
    //   nombre: new FormControl('');
    //   apellido: new FormControl('');
    // });
  
    //Se crea una instancia para la parte logica del formulario
    constructor(private fb: FormBuilder, private logueoServices: LogueoService){}

  ngOnInit(): void{
    this.formuLogin = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    
  }


  //Función del se anida el contenido del formulario
  submit(): void{
    
    console.log("datosValide: " + this.formuLogin.valid);
    this.logueoServices.setInfoSession(this.formuLogin);
    console.log("Existe?: " + this.logueoServices.getConfirmSession());
  }
}
