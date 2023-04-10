interface ICreateInstructorDTO {
  id_instructor?: string;
  instructor: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email?: string;
  id_dojo: string;
  id_graduation: string;
  updatedAt?: Date;
  created_at?: Date;
}

export { ICreateInstructorDTO };
