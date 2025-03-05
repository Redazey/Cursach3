import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Animal } from './entities/animals.model';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal) private animalModel: typeof Animal) {}
  
  async getAnimals() {
    return this.animalModel.findAll();
  }
}
