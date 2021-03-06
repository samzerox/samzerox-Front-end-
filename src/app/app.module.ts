import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';

// Services
import { UsuarioService } from './services/usuario/usuario.service';
import { ProyectoService } from './services/proyecto/proyecto.service';
import { VentanaService } from './services/ventana/ventana.service';
import { SubirArchivoService } from './services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './services/modal-upload/modal-upload.service';
import { TecnologiaService } from './services/tecnologia/tecnologia.service';


// Pipes
import { ImagenPipe } from './pipes/imagen.pipe';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTecnologiaComponent } from './components/modal-tecnologia/modal-tecnologia.component';




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
    LoginComponent,
    ModalUploadComponent,
    ModalTecnologiaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ProyectoService,
    VentanaService,
    SubirArchivoService,
    ModalUploadService,
    TecnologiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
