import { Pipe, PipeTransform } from '@angular/core';
import { DoctorModel } from '../entities/doctor.model';

@Pipe({
  name: 'doctorList'
})
export class DoctorListPipe implements PipeTransform {
  
  transform(value: DoctorModel[], query: string): DoctorModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(doctor => doctor.nombre_d.toLowerCase().indexOf(query) != -1 ||doctor.apellidos_d.toLowerCase().indexOf(query) != -1)
     return value  
  }

}
