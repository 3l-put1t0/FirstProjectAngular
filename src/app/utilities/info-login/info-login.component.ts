import { Component } from '@angular/core';
import { UserDataService } from 'src/app/data/user/user-data/user-data.service';
import { ObjUsers } from '../interfases/obj-users';

@Component({
  selector: 'app-info-login',
  templateUrl: './info-login.component.html',
  styleUrls: ['./info-login.component.css']
})
export class InfoLoginComponent {

  public users!: ObjUsers[];

  constructor(private userLoginService: UserDataService){
    this.users = userLoginService.getUsers();
    console.log(this.users);
  }

  displayedColumns = [
    'id',
    'firstname',
    'lastname',
    'password',
    'rol',
    'active',
  ];

}
