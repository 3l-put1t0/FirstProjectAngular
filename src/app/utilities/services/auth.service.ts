import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/data/user/user-data/user-data.service';
import { ObjStudent } from '../interfases/obj-student';
import { StudentDataService } from 'src/app/data/user/student-data/student-data.service';
import { ObjUsers } from '../interfases/obj-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataUserService: UserDataService) {}

  private user!: ObjUsers;
  private rol!: string;
  private rolAd: string = 'administrador';
  private sesion: boolean = false;


  //Con base al id se valida si el usuario esta activo y de paso se trae su respectivo rol,
  //para ello busca la info en el SCRIPT user-data.service.ts
  public getGenerateSesion(id: string): void{
    this.user = this.dataUserService.getUsersId(id);
    if(this.user.active === true){
      this.rol = this.user.rol;
    }else{
      this.rol = this.user.rol;
    }
  }

  public getRolAdministrador(): boolean{
    (this.rol === this.rolAd) ? this.sesion = true : this.sesion = false;
    return this.sesion;
  }
}
