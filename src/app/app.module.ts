import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavegatorComponent } from './shared/components/navegator/navegator.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { WrapComponent } from './shared/components/wrap/wrap.component';
import { ComponentsModule } from './modules/components/components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    ToolbarComponent,
    WrapComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
