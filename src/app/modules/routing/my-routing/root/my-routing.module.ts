import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { LayoutComponent } from 'src/app/pages/layout/layout.component';
import { WrapComponent } from 'src/app/shared/components/wrap/wrap.component';
import { InfoLoginComponent } from 'src/app/utilities/info-login/info-login.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { NavegatorComponent } from 'src/app/shared/components/navegator/navegator.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    NavegatorComponent,
    InfoLoginComponent
    // UserComponentComponent,
    // MaterialComponentComponent
  ],
  imports: [
    CommonModule,
    MyRoutingRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    MyRoutingRoutingModule,
    LayoutComponent,
    ToolbarComponent,
    NavegatorComponent,
    InfoLoginComponent
  ]
})
export class MyRoutingModule { }
