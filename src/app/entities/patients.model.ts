import { AlergiasModel } from "./alergias.model";
import { DiscapacidadesModel } from "./discapacidades.model";

export interface PatientModel{
    id_paciente:number,
    nombre_paciente:string,
    apellido_paciente:string,
    direccion_paciente:string,
    telefono_paciente:string,
    email_paciente:string,
    password_paciente:string,
    tlf_familiar_paciente:string,
    fecha_nacimiento_paciente: string,
    genero_paciente: Boolean,
    alergias: AlergiasModel,
    discapacidades: DiscapacidadesModel,
}
export interface CreateDoctorDto extends Omit<PatientModel, 'id' | 'alergias'| 'discapacidades'>{
    id_especialidades:number;
    id_alergia:number;
    }
  
  export interface UpdateDoctorDto extends Partial<PatientModel>{
    id_especialidades?:number;
    id_alergia?:number;
  }
  
  

  