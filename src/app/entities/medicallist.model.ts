import { ConsultorioModel } from "./consultorio.model";
import { MedicalsectionModel } from "./medicalselection.model";


export interface MedicalappointmentAsignationModel{
    id_asignacion_medica: number;
    id_cita_medica: number;
    id_consultorio: number;
    nombre_doctor: string;
    apellido_doctor: string;
    nombre_paciente: string;
    apellido_paciente: string;
    fecha_asignada: string;
    horario: string;
    id_consultoriol: string;
}

export interface CreateMedicalAsignationModel extends Omit<MedicalappointmentAsignationModel, 'id_asignacion_medica'|'id_consultorio' |'id_cita_medica'|'nombre_doctor'|'nombre_paciente'|'fecha_asignada'|'horario'|'id_consultoriol'|'apellido_paciente'|'apellido_doctor'>{
    id_cita_medica: number;
    id_consultorio: number;
}

export interface UpdateMedicalAsignationModel extends  Omit<MedicalappointmentAsignationModel, 'id_consultorio' |'id_cita_medica'|'nombre_doctor'|'nombre_paciente'|'fecha_asignada'|'horario'|'id_consultoriol'| 'apellido_paciente'| 'apellido_doctor'>{
    id_cita_medica: number;
    id_consultorio: number;
  }
