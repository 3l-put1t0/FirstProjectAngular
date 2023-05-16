import { Component } from '@angular/core';
import { LogueoService } from 'src/app/utilities/services/logueo/logueo.service';

@Component({
  selector: 'app-navegator',
  templateUrl: './navegator.component.html',
  styleUrls: ['./navegator.component.css']
})
export class NavegatorComponent {

  public rol: string = '';

  constructor(private logueoServices: LogueoService){
    this.rol = logueoServices.getRolUser();
  }

}
