import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentComponent } from '../principalComponent/material-component/material-component.component';
import { ModificarMaterialComponent } from './modificar-material/modificar-material.component';
import { EliminarMaterialComponent } from './eliminar-material/eliminar-material.component';
import { AgregarMaterialComponent } from './agregar-material/agregar-material.component';
import { LayoutComponent } from '../../layout/layout.component';

const routes: Routes = [
  {
    path: '', component: MaterialComponentComponent,
    children: [
      {
        path: 'modificar', component: ModificarMaterialComponent
      },
      {
        path: 'borrar', component: EliminarMaterialComponent
      },
      {
        path: 'agregar', component: AgregarMaterialComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsMaterialsRoutingModule { }
