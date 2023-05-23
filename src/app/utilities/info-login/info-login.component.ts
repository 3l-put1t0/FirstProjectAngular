import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/data/user/user-data/user-data.service';
import { ObjUsers } from '../interfases/obj-users';
import { UserJsonDataService } from 'src/app/data/user/user-data/user-json-data.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-login',
  templateUrl: './info-login.component.html',
  styleUrls: ['./info-login.component.css']
})
export class InfoLoginComponent implements OnInit, OnDestroy{

  public users!: ObjUsers[];
  private suscription!: Subscription;

  constructor(private userLoginService: UserDataService, private dataJSON: UserJsonDataService){
    // this.users = this.userLoginService.getUsers();
    // console.log(this.users);
  }
  
  ngOnInit(): void{
    this.suscription = this.dataJSON.getDataUsers().subscribe((r: ObjUsers[]) => {
      this.users = r,
      this.userLoginService.setUsers(this.users);
    });
    
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
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
