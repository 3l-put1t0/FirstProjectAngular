import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from '../principalComponent/user-component/user-component.component';
import { ModificarUserComponent } from './modificar-user/modificar-user.component';
import { EliminarUserComponent } from './eliminar-user/eliminar-user.component';
import { AgregarUserComponent } from './agregar-user/agregar-user.component';
import { AuthGuard } from 'src/app/utilities/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: UserComponentComponent,
    children:
      [
        {
          path: 'modificar', component: ModificarUserComponent
        },
        {
          path: 'borrar', component: EliminarUserComponent,
          canActivate: [AuthGuard],
        },
        {
          path: 'agregar', component: AgregarUserComponent
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsUsersRoutingModule { }
