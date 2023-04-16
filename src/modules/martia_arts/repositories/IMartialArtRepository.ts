import { ICreateMartialArtDTO } from '../DTO/ICreateMartialArtDTO';
import { MartialArt } from '../models/MartialArt';

interface IMartialArtRepository {
  create({
    id_martial_art,
    martial_art,
    description,
    id_dojo,
  }: ICreateMartialArtDTO): Promise<MartialArt>;
  update({
    id_martial_art,
    martial_art,
    description,
    id_dojo,
  }: ICreateMartialArtDTO): Promise<MartialArt>;
  findById(id_martial_art: string): Promise<MartialArt>;
  findByName(martial_art: string): Promise<MartialArt>;
  delete(id_martial_art: string): Promise<void>;
  list(id_dojo: string): Promise<MartialArt[]>;
}

export { IMartialArtRepository };
