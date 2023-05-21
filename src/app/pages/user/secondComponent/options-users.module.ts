import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsUsersRoutingModule } from './options-users-routing.module';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { AgregarUserComponent } from './agregar-user/agregar-user.component';
import { ModificarUserComponent } from './modificar-user/modificar-user.component';
import { EliminarUserComponent } from './eliminar-user/eliminar-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarUserComponent,
    ModificarUserComponent,
    EliminarUserComponent
  ],
  imports: [
    CommonModule,
    OptionsUsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],

  exports: [
   OptionsUsersRoutingModule 
  ]
})
export class OptionsUsersModule { }
