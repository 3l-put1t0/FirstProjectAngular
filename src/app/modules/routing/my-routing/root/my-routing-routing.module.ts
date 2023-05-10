import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from 'src/app/pages/incio/inicio-component/inicio-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { AgregarUserComponent } from 'src/app/pages/user/secondComponent/agregar-user/agregar-user.component';
import { EliminarUserComponent } from 'src/app/pages/user/secondComponent/eliminar-user/eliminar-user.component';
import { ModificarUserComponent } from 'src/app/pages/user/secondComponent/modificar-user/modificar-user.component';

const routes: Routes = [
  {
    path: '', component: InicioComponentComponent
  },
  {
    path: 'usuarios', component: UserComponentComponent,
    children: [
      {
        path: 'modificar', component: ModificarUserComponent
      },
      {
        path: 'agregar', component: AgregarUserComponent
      },
      {
        path: 'eliminar', component: EliminarUserComponent
      }
    ]
  },
  {
    path: 'materias', component: MaterialComponentComponent
  },
  {
    path: 'inscripciones', component: InscripcionesComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRoutingRoutingModule { }
