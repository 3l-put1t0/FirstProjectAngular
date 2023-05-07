import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NavegatorComponent } from './shared/components/navegator/navegator.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { WrapComponent } from './shared/components/wrap/wrap.component';
import { UsuariosComponent } from './pages/usuarios-page/usuarios-page.component';
import { MateriasComponent } from './pages/materias-page/materias-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    ToolbarComponent,
    WrapComponent,
    UsuariosComponent,
    MateriasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
