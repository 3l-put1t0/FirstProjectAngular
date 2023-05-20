import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavegatorComponent } from './shared/components/navegator/navegator.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ComponentsModule } from './modules/components/componentsPrincipal/components.module';
import { MyRoutingModule } from './modules/routing/my-routing/root/my-routing.module';
import { InicioComponentComponent } from './pages/incio/inicio-component/inicio-component.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WrapComponent } from './shared/components/wrap/wrap.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // NavegatorComponent,
    // ToolbarComponent,
    InicioComponentComponent,
    LoginComponent,
    WrapComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsModule,
    MyRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
