import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/data/user/user-data/user-data.service';
import { ObjUsers } from '../../interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {

  private session!: FormGroup;
  private dataUser!: ObjUsers;
  private idUser: string = '';
  private passwordUser: string = '';
  private confirmSession: boolean = false;
  private rolUser: string = '';
  private active: boolean = false;

  constructor(private userDataService: UserDataService) {
    // this.userDataService.getUsersId();
  }

  //Se crea una función para traer todo la info del formulario de logue
  public setInfoSession(session: FormGroup): void {
    this.session = session;
    this.checkUser(this.session);
  }

  public getInfoSession(): FormGroup{
    return this.session;
  }

  //Verifica si existe el usuarios
  private checkUser(session: FormGroup): void {
    this.idUser = session.get('id')?.value;
    this.dataUser = this.userDataService.getUsersId(this.idUser);
    this.confirmReponse(this.dataUser, session);
  }

  //Confirma si la contraseña esta correcta una vez el usuarios se a logueado
  private confirmReponse(data: ObjUsers, session: FormGroup): void {

    this.passwordUser = session.get('password')?.value;

    if (this.passwordUser == data.password) {
      this.confirmSession = true;
    } else {
      this.confirmSession = false;
    }
  }

  //Retorna la respuesta de la confirmación:
  public getConfirmSession(): boolean {
    return this.confirmSession;
  }

  //Retorna el rol del usuario logueado si existe
  public getRolUser(): string {
    if (this.getConfirmSession()) {
      return this.rolUser = this.dataUser.rol;
    }
    return '';

  }

  public setActive(active: boolean): void {
    this.active = active;
  }

  public getActive(): boolean{
    return this.active;
  }

}
