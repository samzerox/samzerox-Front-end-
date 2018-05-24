import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

// Models
import { Ventana } from '../../models/ventana.model';
import { Tecnologia } from '../../models/tecnologia.model';

// services
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { VentanaService } from '../../services/ventana/ventana.service';
import { Proyecto } from '../../models/proyecto.model';
import { ModalUploadService } from '../../services/modal-upload/modal-upload.service';
import { TecnologiaService } from '../../services/tecnologia/tecnologia.service';

declare var swal: any;


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {

  proyecto: any[] = [];
  tecnologias: any[] = [];
  cargando: Boolean = true;

  constructor(public _us: UsuarioService,
              public _ps: ProyectoService,
              public _vs: VentanaService,
              public _ts: TecnologiaService,
              public _modalUploadService: ModalUploadService,
              public activatedRoute: ActivatedRoute) {

                this.cargarProyecto();
                this.cargarTecnologias()

  }

  ngOnInit() {
    this._modalUploadService.notificacion
    .subscribe( resp => this.cargarProyecto() );
  }

  cargarProyecto( ) {

    this.activatedRoute.params.subscribe( params => {

      let id = params['id'];


      this._ps.cargarProyecto( id )
      .subscribe( (resp: any) => {
        this.proyecto = resp;
        this.cargando = false;
      });
    });
  }

  cargarTecnologias() {
    this._ts.cargarTecnologias()
                .subscribe( (resp: any) => {
                  this.tecnologias = resp;
                });
  }

  crearVentana( forma: NgForm, id: string) {
    if (forma.invalid) {
      return;
    }

    let ventana = new Ventana(forma.value.titulo, forma.value.descripcion);
    console.log(ventana);

    this._vs.crearVentana( ventana )
                  .subscribe(correcto => {
                    this.actualizarProyecto(this.proyecto, correcto._id);
                    } );

  }

  agregarTecnologia( idTecnologia, proyecto: Proyecto) {

    console.log(idTecnologia);
    console.log(proyecto);


    this._ts.actualizarTecnologia( idTecnologia, proyecto )
                  .subscribe(correcto => {
                    this.cargarProyecto();
                    } );

  }

  actualizarProyecto(proyecto, idVentana) {


      this._ps.actualizarProyecto( proyecto, idVentana )
              .subscribe(resp => {
                this.cargarProyecto();
              });

  }

  borrarventana( ventana: Ventana ) {

    swal({
      title: 'Estas seguro?',
      text: 'Esta a punto de borrar el proyecto ' + ventana.titulo,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
        this._vs.borrarVentana( ventana._id)
                  .subscribe( borrado => {
                    this.cargarProyecto();
                  });
      }
    });

  }


  mostarModal( id: string ) {
    this._modalUploadService.mostrarModal('capturas', id );
  }






}
