import { DoctorModel } from "./doctor.model";

export interface ConsultorioModel{
	nombre_consultorio:string,
	referencia:string,
	nombre_doctor:DoctorModel
}


