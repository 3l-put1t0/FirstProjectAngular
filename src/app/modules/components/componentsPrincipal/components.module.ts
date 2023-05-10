import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';
import { SlayerComponentsModule } from '../componentsSlayer/slayer-components/slayer-components.module';
import { AgregarUserComponent } from 'src/app/pages/user/secondComponent/agregar-user/agregar-user.component';
import { ModificarUserComponent } from 'src/app/pages/user/secondComponent/modificar-user/modificar-user.component';
import { EliminarUserComponent } from 'src/app/pages/user/secondComponent/eliminar-user/eliminar-user.component';



@NgModule({
  declarations: [
    MaterialComponentComponent,
    InscripcionesComponentComponent,
    EliminarUserComponent,
    ModificarUserComponent,
    AgregarUserComponent
      
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,  
    SlayerComponentsModule
  ],
  exports: [
    
    MaterialComponentComponent,
    InscripcionesComponentComponent,
    EliminarUserComponent,
    ModificarUserComponent,
    AgregarUserComponent
  ]
 

})
export class ComponentsModule { }
