import { DoctorModel } from "./doctor.model";

export interface ConsultorioModel{
	id_consultorio: number;
	nombre_consultorio:string,
	referencia:string,
	nombre_doctor:DoctorModel
}


