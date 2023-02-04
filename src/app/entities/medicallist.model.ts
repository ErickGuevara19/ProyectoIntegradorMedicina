import { ConsultorioModel } from "./consultorio.model";
import { MedicalsectionModel } from "./medicalselection.model";


export interface MedicalappointmentAsignationModel{
    id_asignacion_medica: number;
    id_cita_medica: MedicalsectionModel;
    id_consultorio: ConsultorioModel;
}

export interface CreateMedicalAsignationModel extends Omit<MedicalappointmentAsignationModel, 'id_asignacion_medica'|'id_consultorio' |'id_cita_medica'>{
    id_cita_medica: number;
    id_consultorio: number;
}

export interface UpdateMedicalAsignationModel extends  Omit<MedicalappointmentAsignationModel, 'id_consultorio' |'id_cita_medica'>{
    id_cita_medica: number;
    id_consultorio: number;
  }
