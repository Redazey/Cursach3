import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import { Public } from 'src/common/decorators/public.decorator';
import { CreationAttributes } from 'sequelize';
import { ClinicNews } from './entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @Public()
  findAll() {
    return this.newsService.getNews();
  }

  @Post('create')
  create(@Body() newsDto: CreationAttributes<ClinicNews>) {
    return this.newsService.create(newsDto);
  }

  @Post('delete/:id')
  delete(@Param('id') id: number) {
    return this.newsService.delete(id);
  }
}
