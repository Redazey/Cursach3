import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { Public } from 'src/common/decorators/public.decorator';
import { CreationAttributes } from 'sequelize';
import { Feedback } from './entities/feedback.entity';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post('create')
  @Public()
  create(@Body() createFeedbackDto: CreationAttributes<Feedback>) {
    this.feedbacksService.create(createFeedbackDto);
    return this.feedbacksService.findAll();
  }

  @Get()
  @Public()
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Post('delete/:id')
  delete(@Param('id') id: number) {
    return this.feedbacksService.delete(id);
  }
}
