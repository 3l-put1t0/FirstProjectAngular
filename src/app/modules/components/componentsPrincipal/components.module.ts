import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';
import { AgregarUserComponent } from 'src/app/pages/user/secondComponent/agregar-user/agregar-user.component';
import { ModificarUserComponent } from 'src/app/pages/user/secondComponent/modificar-user/modificar-user.component';
import { EliminarUserComponent } from 'src/app/pages/user/secondComponent/eliminar-user/eliminar-user.component';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { MyRoutingModule } from '../../routing/my-routing/root/my-routing.module';



@NgModule({
  declarations: [
    UserComponentComponent,
    MaterialComponentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,  
    MyRoutingModule
  ],
  exports: [
    UserComponentComponent,
    MaterialComponentComponent

  ]
 

})
export class ComponentsModule { }
