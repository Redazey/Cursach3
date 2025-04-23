import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClinicNews } from './entities/news.entity';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class NewsService {
  constructor(@InjectModel(ClinicNews) private newsModel: typeof ClinicNews) {}

  async getNews() {
    return this.newsModel.findAll();
  }

  async delete(id: number) {
    return this.newsModel.destroy({
      where: {
        id: id,
      },
    });
  }

  async create(news: CreationAttributes<ClinicNews>) {
    return this.newsModel.create(news);
  }
}
