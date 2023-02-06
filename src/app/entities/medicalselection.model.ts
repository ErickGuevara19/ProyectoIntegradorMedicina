import { Time} from "@angular/common";
import { DoctorModel } from "./doctor.model";
import { EspecialidadesModel } from "./especialities.model";
import { HorarioModel } from "./horario.model";
import { PatientModel } from "./patients.model";

export interface MedicalsectionModel{
    id_cita_medica: number;
    id_paciente: string;
    id_doctor: string;
    fecha_asignada: Date;
    hora_inicio: string;
    hora_fin: string;
    id_horario: string

}

export interface CreateMedicalSection extends Omit<MedicalsectionModel, 'id_paciente' | 'id_doctor' | 'id_citamedica'| 'id_horario'>{
    id_paciente:number;
    id_doctor: number;
    id_horario: number
    }
  