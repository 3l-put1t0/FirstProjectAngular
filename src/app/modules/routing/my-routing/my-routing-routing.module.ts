import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from 'src/app/pages/incio/inicio-component/inicio-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';

const routes: Routes = [
  {
    path: '', component: InicioComponentComponent
  },
  {
    path: 'usuarios', component: UserComponentComponent
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
