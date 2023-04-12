class Student {
  id_student?: string;
  student: string | undefined;
  birthday: string | undefined;
  responsible: string | undefined;
  responsible_phone: string | undefined;
  address_line1: string | undefined;
  address_line2: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  phone: string | undefined;
  email?: string | undefined;
  id_dojo: string | undefined;
  paid_out?: boolean;
  updatedAt?: Date;
  created_at?: Date;
}

export { Student };
