import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { ConfiguracionesComponent } from './pages/configuraciones/configuraciones.component';

// Services
import { UsuarioService } from './services/usuario/usuario.service';
import { ProyectoService } from './services/proyecto/proyecto.service';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NopagefoundComponent,
    HomeComponent,
    ProyectosComponent,
    AboutComponent,
    ProyectoComponent,
    ImagenPipe,
    ConfiguracionesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
