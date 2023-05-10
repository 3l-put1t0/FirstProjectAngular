import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUserComponent } from 'src/app/pages/user/secondComponent/agregar-user/agregar-user.component';
import { EliminarUserComponent } from 'src/app/pages/user/secondComponent/eliminar-user/eliminar-user.component';
import { ModificarUserComponent } from 'src/app/pages/user/secondComponent/modificar-user/modificar-user.component';

const routes: Routes = [
  {
    path: 'usuarios/modificarUsuario', component: ModificarUserComponent
  },
  {
    path: 'usuarios/agregarUsuario', component: AgregarUserComponent
  },
  {
    path: 'usuarios/eliminarUsuario', component: EliminarUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingChildrenUserRoutingModule { }
