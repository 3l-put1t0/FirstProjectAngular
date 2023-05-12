import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from 'src/app/pages/incio/inicio-component/inicio-component.component';
import { InscripcionesComponentComponent } from 'src/app/pages/inscripciones/inscripciones-component/inscripciones-component.component';
import { MaterialComponentComponent } from 'src/app/pages/material/principalComponent/material-component/material-component.component';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { OptionsUsersModule } from 'src/app/pages/user/secondComponent/options-users.module';
import { OptionsMaterialsModule } from '../../../../pages/material/secondComponent/options-materials.module';
import { LayoutComponent } from 'src/app/pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponentComponent
  },
  {
    path: 'usuarios', 
    loadChildren:() => import('../../../../pages/user/secondComponent/options-users.module').then((m) => m.OptionsUsersModule)
  },
  {
    path: 'materias', //component: MaterialComponentComponent,
    loadChildren:() => import('../../../../pages/material/secondComponent/options-materials.module').then((m) => m.OptionsMaterialsModule)
  },
  {
    path: 'inscripciones', component: InscripcionesComponentComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    // OptionsUsersModule,
    // OptionsMaterialsModule
  ]
    ,
  exports: [
    RouterModule
  ]
})
export class MyRoutingRoutingModule { }
