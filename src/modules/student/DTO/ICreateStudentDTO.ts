interface ICreateStudentDTO {
  id_student?: string;
  student: string;
  birthday: string;
  responsible: string;
  responsible_phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email?: string;
  id_dojo: string;
  paid_out?: boolean;
  updatedAt?: Date;
  created_at?: Date;
}

export { ICreateStudentDTO };
