import { DoctorModel } from "./doctor.model";

export interface CategoryModel{
	nombre_consultorio:string,
	referencia:string,
	nombre_doctor:DoctorModel
}


