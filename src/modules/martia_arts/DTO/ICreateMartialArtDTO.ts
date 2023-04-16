interface ICreateMartialArtDTO {
  id_martial_art?: string;
  martial_art: string;
  description: string;
  id_dojo: string;
  updatedAt?: Date;
  created_at?: Date;
}

export { ICreateMartialArtDTO };
