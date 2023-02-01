import { EspecialidadesModel } from "./especialities.model";

export interface DoctorModel{
  id_doctor:number,
  nombre_d:string,
  apellidos_d:string,
  email:string,
  dirreccion_d:string,
  password_d:string,
  especialidades: EspecialidadesModel
}

export interface CreateDoctorDto extends Omit<DoctorModel, 'id_doctor' | 'especialidades'>{
  id_especialidades:number;
  }

export interface UpdateDoctorDto extends  Omit<DoctorModel, 'especialidades'>{
  id_especialidades:number;
}
