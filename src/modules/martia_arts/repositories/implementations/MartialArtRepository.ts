import { martial_artModel } from '../../../../database/models/martial_art';
import { AppError } from '../../../erros/Error';

import { ICreateMartialArtDTO } from '../../DTO/ICreateMartialArtDTO';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../IMartialArtRepository';
import { Op } from 'sequelize';

class MartialArtRepository implements IMartialArtRepository {
  private static instance: MartialArtRepository;

  public static getInstance(): MartialArtRepository {
    if (!MartialArtRepository.instance) {
      MartialArtRepository.instance = new MartialArtRepository();
    }

    return MartialArtRepository.instance;
  }

  async create({
    id_martial_art,
    martial_art,
    description,
  }: ICreateMartialArtDTO): Promise<MartialArt> {
    const obj: any = await martial_artModel.create({
      id_martial_art,
      martial_art,
      description,
    });

    return obj.toJSON() as MartialArt;
  }

  async update({
    id_martial_art,
    martial_art,
    description,
  }: ICreateMartialArtDTO): Promise<MartialArt> {
    const [rowsAffected] = await martial_artModel.update(
      {
        id_martial_art,
        martial_art,
        description,
      },
      {
        where: { id_martial_art },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Martial art not found.', 404);
    }

    const updatedMartialArt = await martial_artModel.findOne({
      where: { id_martial_art },
    });

    return updatedMartialArt?.toJSON() as MartialArt;
  }

  async findById(id_martial_art: string): Promise<MartialArt> {
    const obj: any = await martial_artModel.findOne({
      where: { id_martial_art },
    });

    return obj;
  }

  async findByName(martial_art: string): Promise<MartialArt> {
    const obj: any = await martial_artModel.findOne({
      where: { martial_art },
    });

    return obj;
  }

  async list(): Promise<MartialArt[]> {
    const martialArts: any = await martial_artModel.findAll();
    return martialArts;
  }

  async delete(id_martial_art: string): Promise<void> {
    const rowsAffected = await martial_artModel.destroy({
      where: { id_martial_art },
    });

    if (rowsAffected === 0) {
      throw new AppError('Martial art not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<MartialArt[]> {
    const martialArts = await martial_artModel.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${searchTerm}%` } },
          { description: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return martialArts.map((martialArt) => martialArt.toJSON() as MartialArt);
  }
}

export { MartialArtRepository };
