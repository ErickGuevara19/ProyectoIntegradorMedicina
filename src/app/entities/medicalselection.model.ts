import { Time} from "@angular/common";
import { DoctorModel } from "./doctor.model";
import { EspecialidadesModel } from "./especialities.model";
import { HorarioModel } from "./horario.model";
import { PatientModel } from "./patients.model";

export interface MedicalsectionModel{
    id_cita_medica: number;
    id_paciente: number;
    id_doctor: number;
    fecha_asignada: Date;
    id_horario: number;
    id_pacientel: string;
    id_doctorl: string;
    id_horariol: string;
}

export interface CreateMedicalSection extends Omit<MedicalsectionModel, 'id_paciente' | 'id_doctor' | 'id_cita_medica'| 'id_horario' | 'id_pacientel'| 'id_doctorl'| 'id_horariol'>{
    id_paciente:number;
    id_doctor: number;
    id_horario: number;
}
  