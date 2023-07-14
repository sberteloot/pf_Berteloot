import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from 'src/app/dashboard/pages/students/models/student';

@Pipe({
  name: 'namesurname'
})
export class NamesurnamePipe implements PipeTransform {

  transform(value: IStudent, ...args: unknown[]): string {
    let resultado : string = `${value.name} ${value.surname}`
    return resultado;
  }

}
