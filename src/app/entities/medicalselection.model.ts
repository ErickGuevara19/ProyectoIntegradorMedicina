import { Time} from "@angular/common";
import { DoctorModel } from "./doctor.model";
import { EspecialidadesModel } from "./especialities.model";
import { PatientModel } from "./patients.model";

export interface MedicalsectionModel{
    id_citamedica: number;
    id_paciente: PatientModel;
    id_doctor: DoctorModel;
    fecha_asignada: Date;
    hora_inicio: string;
    hora_finalizacion: string;

}