import { CategoryModel } from "./category.model";
import { ConsultorioModel } from "./consultorio.model";
import { MedicalsectionModel } from "./medicalselection.model";


export interface MedicalappointmentAsignationModel{
    id_asignacion_medica: number;
    id_citamedica: MedicalsectionModel;
    id_consultorio: ConsultorioModel;
}