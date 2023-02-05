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
     value = value.filter(doctor => doctor.nombre_d.toLowerCase().indexOf(query.toLowerCase()) != -1 ||doctor.apellidos_d.toLowerCase().indexOf(query.toLowerCase()) != -1)
     return value  
  }

}

@Pipe({
  name: 'doctorEmailList'
})
export class DoctorEmailListPipe implements PipeTransform {
  
  transform(value: DoctorModel[], query: string): DoctorModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(doctor => doctor.email.indexOf(query) != -1)
     return value  
  }

}

@Pipe({
  name: 'doctorEspecialityList'
})
export class DoctorEspecialityistPipe implements PipeTransform {
  
  transform(value: DoctorModel[], query: string): DoctorModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(doctor => doctor.especialidades.toLowerCase().indexOf(query.toLowerCase()) != -1)
     return value  
  }

}
