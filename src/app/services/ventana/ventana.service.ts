import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Ventana } from '../../models/ventana.model';

// Services
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';

import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../../models/proyecto.model';

declare var swal: any;

@Injectable()
export class VentanaService {

  constructor( public http: HttpClient,
                private _us: UsuarioService) { }

  crearVentana( ventana: Ventana) {
    let url = URL_SERVICIOS + '/ventana';
        url += '?token=' + this._us.token;

        return this.http.post( url, ventana)
                .map( (resp: any) => {
                  swal( 'Ventana creada', ventana.titulo, 'success');
                  return resp.ventana;
                })
                .catch ( err => {

                  swal(err.error.mensaje, err.error.errors.message, 'error');
                  return Observable.throw( err );
                });
  }


  borrarVentana( id: string ) {
    let url = URL_SERVICIOS + '/ventana/' + id;
    url += '?token=' + this._us.token;

    return this.http.delete( url )
              .map( resp => {
                swal('Ventana borrada', ' La ventana ha sido borrada correctamente', 'success');
                return true;
              });
  }


  eliminarVentana( idVentana: [string], proyecto: Proyecto ) {
    let url = URL_SERVICIOS + '/ventanaArray/' + proyecto._id;
    url += '?token=' + this._us.token;

    proyecto.ventanas = [idVentana];

    return this.http.put(url, proyecto )
          .map( (resp: any) => {
            swal('Ventana Eliminada del proyecto: ', proyecto.nombre, 'success');
            return resp;
          });
  }


}


