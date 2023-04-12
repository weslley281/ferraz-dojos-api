interface ICreateGraduationDTO {
  id_graduation?: string;
  graduation?: string;
  description: string;
  id_martial_art: string;
  id_dojo: string;
  updatedAt?: Date;
  created_at?: Date;
}

export { ICreateGraduationDTO };
