import { AlergiasModel } from "./alergias.model";
import { DiscapacidadesModel } from "./discapacidades.model";

export interface PatientModel{
    id_patient:number,
    nombre_p:string,
    apellidos_p:string,
    dirreccion_p:string,
    telefono_p:string,
    email_p:string,
    telefono_familiar_p:string,
    fecha_nacimiento_p: Date,
    genero_p: Boolean,
    contraseña_d:string,
    alergias: AlergiasModel,
    dicapacidades: DiscapacidadesModel,
}
export interface CreateDoctorDto extends Omit<PatientModel, 'id' | 'alergias'| 'discapacidades'>{
    id_especialidades:number;
    id_alergias:number;
    }
  
  export interface UpdateDoctorDto extends Partial<PatientModel>{
    id_especialidades?:number;
    id_alergias?:number;
  }
  
  

  