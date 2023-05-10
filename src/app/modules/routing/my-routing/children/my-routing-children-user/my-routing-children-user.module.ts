import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingChildrenUserRoutingModule } from './my-routing-children-user-routing.module';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [ UserComponentComponent,],
  imports: [
    CommonModule,
    MyRoutingChildrenUserRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    MyRoutingChildrenUserRoutingModule,
    UserComponentComponent,
  ]
})
export class MyRoutingChildrenUserModule { }
