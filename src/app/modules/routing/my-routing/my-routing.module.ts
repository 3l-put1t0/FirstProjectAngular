import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { WrapComponent } from 'src/app/shared/components/wrap/wrap.component';


@NgModule({
  declarations: [WrapComponent],
  imports: [
    CommonModule,
    MyRoutingRoutingModule
  ],
  exports: [
    MyRoutingRoutingModule,
    WrapComponent
  ]
})
export class MyRoutingModule { }
