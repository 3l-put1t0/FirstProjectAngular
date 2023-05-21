import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsMaterialsRoutingModule } from './options-materials-routing.module';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { AgregarMaterialComponent } from './agregar-material/agregar-material.component';
import { ModificarMaterialComponent } from './modificar-material/modificar-material.component';
import { EliminarMaterialComponent } from './eliminar-material/eliminar-material.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarMaterialComponent,
    ModificarMaterialComponent,
    EliminarMaterialComponent
  ],
  imports: [
    CommonModule,
    OptionsMaterialsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class OptionsMaterialsModule { }
