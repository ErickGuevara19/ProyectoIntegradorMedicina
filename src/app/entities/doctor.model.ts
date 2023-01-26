import { EspecialidadesModel } from "./especialities.model";

export interface DoctorModel{
  id_doctor:number,
  nombre_d:string,
  apellidos_d:string,
  email:string,
  direccion_d:string,
  contrasenia_d:string,
  especialidad: EspecialidadesModel
}

export interface CreateDoctorDto extends Omit<DoctorModel, 'id' | 'especialidad'>{
  id_especialidades:number;
  }

export interface UpdateDoctorDto extends Partial<DoctorModel>{
  id_especialidades?:number;
}
