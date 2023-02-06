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
    fecha_nacimiento_paciente: Date,
    genero_paciente: Boolean,
    alergias: AlergiasModel,
    alergia_nombre:string,
    discapacidades: DiscapacidadesModel,
    discapacidad_nombre: string,
}
export interface CreatePacientesDto extends Omit<PatientModel, 'id_paciente'|'alergia_nombre'|'discapacidad_nombre'|'alergias'|'discapacidades'>{
  alergia_nombre :string;
  discapacidad_nombre:string
  }
  
  export interface UpdatePacientesDto extends Omit<PatientModel,'alergias'|'discapacidades'|'alergia_nombre'|'discapacidad_nombre'>{
    id_discapacidades:number;
    id_alergias:number;
    alergia_nombre :string;
    discapacidad_nombre:string
  }
  
  

  