import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Animal } from './entities/animals.model';

@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
