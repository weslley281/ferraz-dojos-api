interface ICreateDojoDTO {
  id_dojo?: string;
  dojo: string;
  password?: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email?: string;
  paid_out?: boolean;
  updatedAt?: Date;
  created_at?: Date;
}

export { ICreateDojoDTO };
