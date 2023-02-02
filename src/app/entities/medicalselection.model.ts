import { Time} from "@angular/common";
import { DoctorModel } from "./doctor.model";
import { EspecialidadesModel } from "./especialities.model";
import { PatientModel } from "./patients.model";

export interface MedicalsectionModel{
    id_cita_medica: number;
    id_paciente: PatientModel;
    id_doctor: DoctorModel;
    fecha_asignada: Date;
    hora_inicio: string;
    hora_fin: string;

}

export interface CreateMedicalSection extends Omit<MedicalsectionModel, 'id_paciente' | 'id_doctor' | 'id_citamedica'>{
    id_paciente:number;
    id_doctor: number
    }
  