import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    UserComponentComponent
  ]

})
export class ComponentsModule { }
