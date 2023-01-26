export interface DoctorModel{
  id_doctor:number,
  nombre_d:string,
  apellidos_d:string,
  email:string,
  dirreccion_d:string,
  contraseña_d:string,
}

export interface CreateDoctorDto extends Omit<DoctorModel, 'id' | 'caregory'>{
    categoryId:number;
    }

export interface UpdateDoctorDto extends Partial<DoctorModel>{
categoryId?:number;
}
