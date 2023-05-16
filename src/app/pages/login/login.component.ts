import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.formuLogin = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    
  }


  //Función del se anida el contenido del formulario
  submit(): void{
    console.log("Dio clic");
    console.log("datosValide " + this.formuLogin.valid);
    console.log("id: " + this.formuLogin.get('id')?.value); 
    console.log("password: " + this.formuLogin.get('password')?.value); 
    
    
  }
}
