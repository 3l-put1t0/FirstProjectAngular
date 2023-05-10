import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { WrapComponent } from 'src/app/shared/components/wrap/wrap.component';
import { MyRoutingChildrenUserModule } from '../children/my-routing-children-user/my-routing-children-user.module';


@NgModule({
  declarations: [WrapComponent],
  imports: [
    CommonModule,
    MyRoutingRoutingModule,
    MyRoutingChildrenUserModule
  ],
  exports: [
    MyRoutingRoutingModule,
    MyRoutingChildrenUserModule,
    WrapComponent
  ]
})
export class MyRoutingModule { }
