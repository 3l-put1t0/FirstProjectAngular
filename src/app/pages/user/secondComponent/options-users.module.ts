import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsUsersRoutingModule } from './options-users-routing.module';

@NgModule({
  declarations: [
    // UserComponentComponent
  ],
  imports: [
    CommonModule,
    OptionsUsersRoutingModule,
    // AngularMaterialModule,
  ],

  exports: [
   OptionsUsersRoutingModule 
  ]
})
export class OptionsUsersModule { }
