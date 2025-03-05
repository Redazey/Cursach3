import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClinicNews } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(@InjectModel(ClinicNews) private newsModel: typeof ClinicNews) {}
  
  async getNews() {
    return this.newsModel.findAll();
  }
}
