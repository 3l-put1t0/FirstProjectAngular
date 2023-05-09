import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavegatorComponent } from './shared/components/navegator/navegator.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ComponentsModule } from './modules/components/components/components.module';
import { MyRoutingModule } from './modules/routing/my-routing/my-routing.module';
import { InicioComponentComponent } from './pages/incio/inicio-component/inicio-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    ToolbarComponent,
    InicioComponentComponent,
    // WrapComponent,
    // UserComponentComponent
    // MaterialComponentComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsModule,
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
