import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from 'src/app/pages/user/principalComponent/user-component/user-component.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';



@NgModule({
  declarations: [
    UserComponentComponent,
      
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,  
  ],
  exports: [
    UserComponentComponent,
  ]
 

})
export class ComponentsModule { }
