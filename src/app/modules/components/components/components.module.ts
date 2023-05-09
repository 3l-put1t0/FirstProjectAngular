import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    MaterialComponentComponent,
    InscripcionesComponentComponent
      
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,  
  ],
  exports: [
    UserComponentComponent,
    MaterialComponentComponent,
    InscripcionesComponentComponent
  ]
 

})
export class ComponentsModule { }
