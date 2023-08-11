import { ICreateDojoDTO } from "@modules/dojo/DTO/IDojoDTO";
import { Dojo } from "@modules/dojo/models/Dojo";
import { IDojoRepository } from "@modules/dojo/repositories/IDojoRepository";

export class DojoRepositoryMock implements IDojoRepository {
    update({ id_dojo, dojo, address_line1, address_line2, city, state, country, phone, email, paid_out, }: ICreateDojoDTO): Promise<Dojo> {
      throw new Error('Method not implemented.');
    }
    findById(id_dojo: string): Promise<Dojo> {
      throw new Error('Method not implemented.');
    }
    delete(id_dojo: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
    list(): Promise<Dojo[]> {
      throw new Error('Method not implemented.');
    }
    private dojos: Dojo[] = [];
  
    async findByEmail(email: string): Promise<Dojo | undefined> {
      return this.dojos.find(dojo => dojo.email === email);
    }
  
    async create(data: Dojo): Promise<Dojo> {
      const dojo = new Dojo();
      Object.assign(dojo, data);
      this.dojos.push(dojo);
      return dojo;
    }
  }