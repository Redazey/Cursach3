import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClinicNews } from './entities/news.entity';

@Module({
  imports: [SequelizeModule.forFeature([ClinicNews])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
