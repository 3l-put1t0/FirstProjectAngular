import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { LayoutComponent } from 'src/app/pages/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
    // WrapComponent,
    // UserComponentComponent,
    // MaterialComponentComponent
  ],
  imports: [
    CommonModule,
    MyRoutingRoutingModule,
    // AngularMaterialModule
  ],
  exports: [
    MyRoutingRoutingModule,
    LayoutComponent
    // WrapComponent
  ]
})
export class MyRoutingModule { }
