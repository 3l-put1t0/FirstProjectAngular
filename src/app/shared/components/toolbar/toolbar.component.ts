import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utilities/services/auth/auth.service';
import { LogoutService } from 'src/app/utilities/services/logout/logout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

  public variable: string = "MODIFICAR";
  public app: string = "My App"

  constructor(private logOutService: LogoutService,
              private router: Router,
              private authServices: AuthService){}

  ngOnInit(): void{
    this.logOutService.setOutSession(false);
  }

  close(){
    this.logOutService.setOutSession(true);
    this.authServices.setCounterSession(0);
    this.router.navigate(['login']);
  }
}
