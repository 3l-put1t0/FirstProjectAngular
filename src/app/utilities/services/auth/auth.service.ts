import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/data/user/user-data/user-data.service';
import { ObjUsers } from '../../interfases/obj-users';
import { LogueoService } from '../logueo/logueo.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private logueoService: LogueoService) {}

  private rol!: string;
  private rolAd: string = 'administrador';
  private sesionAdmin: boolean = false;
  private c: number = 0;

  //Una vez identificado el usuario con su ID y password, se 
  //procede a validar el rol, para así generar la respectiva sesión
  private generateSession(): void{
    console.log('generateSession');
    console.log('rol del servicio logueoService: ' + this.logueoService.getRolUser());
    if(this.logueoService.getConfirmSession() && this.logueoService.getActive()){
      console.log('se confirma logueo de usuario: ' + this.logueoService.getConfirmSession() + ' ' + this.c) ;
      if(this.c === 0){
        if(this.logueoService.getRolUser() != ''){
          this.rol = this.logueoService.getRolUser();          
          this.router.navigate(['inicio']);
          this.c=1;
          console.log('va para: inicio: ' + this.c);
        }
      }      
    }
  }

  //Reinicia el contador de logueo
  public setCounterSession (counter: number): void{
    this.c = counter;
  }

  //Se envia el rol del usuario, si en este caso es administrador se activan
  //todos los componentes con el guard
  public getSession(): boolean{
    this.generateSession();
    if(this.rol === this.rolAd){
      return this.sesionAdmin = true; //Si es administrador
    }
    return this.sesionAdmin = false;
  }

  //Con esta función se reinicializa el contador para generar
  //el componente de incio
  public setInicio(contador: number){
    this.c = contador;
  }
}
