import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface INotification {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  
  private notifier$ = new Subject<INotification>()

  arrayErrorsHttp : Record<number, string> = {
    400: 'El servidor no pudo interpretar la solicitud',
    401: 'No está autorizado',
    403: 'No posee los permisos',
    404: 'Recurso no encontrado',
    405: 'La solicitud no puede ser realizada',
    407: 'Se requiere autenticación en un proxy',
    500: 'Error interno del servidor',
    501: "El método no está implementado",
    502: "Respuesta Inválida del servidor",
    504: "Se superó el tiempo de espera en el Gateway",
    505: "Versión de Http no soportada"
  }

  constructor() { 
    this.notifier$.subscribe({
      next: (myNotification) => {
        Swal.fire(myNotification.title, myNotification.message, myNotification.type);
      }
    })    
  }
  
  showSuccess(message: string, title = 'Exitoso') : void {
    this.notifier$.next({
      type: 'success',
      message,
      title
    });
  }

  showError(message: string, title = 'Error!') : void {
    this.notifier$.next({
      type: 'error',
      message,
      title
    });
  }

  showAnyError(err : any) : void {

    let title = 'Error!'
    let message = this.getMessage(err);

    this.notifier$.next({
      type: 'error',
      message,
      title
    });    
  }

  private getMessage(err : any) : string {

    let message = 'Ocurrió un Error Inesperado';

    console.log(err);
    
    if (err.name === 'HttpErrorResponse' && err.status === 0) {
      return 'No se pudo establecer la conexión con el Servidor';
    }

    if (err instanceof HttpErrorResponse) {
      let retorno = this.arrayErrorsHttp[err.status];
      if(retorno === null) message = retorno;
    }

    return message;

  }

}
