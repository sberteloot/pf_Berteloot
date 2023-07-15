import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorsFormsControls'
})
export class ErrorsFormsControlsPipe implements PipeTransform {

  arrayErrors : Record<string, string> = {
    required: 'El valor es requerido',
    requiredtrue: 'El valor debe ser verdadero o falso',
    email: 'Ingrese un email válido',
    minlength: 'Debe tener como mínimo XX caracteres',
    maxlength: 'Debe tener como máximo XX caracteres',
    nullvalidator : 'No puede contener un valor nulo',
    matDatepickerParse : 'Ingrese una fecha válida',
    matDatepickerMax : "Ingrese una fecha menor a XX"
  }

  transform(errorForm: { key: string, value: any }, ...args: unknown[]): string {
    let retorno : string = '';

    retorno = this.arrayErrors[errorForm.key];
    if(retorno === null) retorno = 'Valor inválido';

    if(errorForm.key === "minlength" || errorForm.key === "maxlength"){
      retorno = retorno.replace("XX", errorForm.value.requiredLength);
    }

    if(errorForm.key === "matDatepickerMax"){
      retorno = retorno.replace("XX", errorForm.value.max.toLocaleDateString('es-ES'));
    }    

    return retorno;
  }

}
