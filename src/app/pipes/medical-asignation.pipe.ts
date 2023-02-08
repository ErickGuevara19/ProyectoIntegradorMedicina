import { Pipe, PipeTransform } from '@angular/core';
import { MedicalappointmentAsignationModel } from '../entities/medicallist.model';

@Pipe({
  name: 'medicalAsignation'
})
export class MedicalAsignationPipe implements PipeTransform {

  transform(value: MedicalappointmentAsignationModel[], query: string): MedicalappointmentAsignationModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(doctor => doctor.nombre_doctor.indexOf(query) != -1)
     return value  
  }

}
