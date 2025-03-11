import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    this.feedbacksService.create(createFeedbackDto);
    return this.feedbacksService.findAll();
  }

  @Get()
  findAll() {
    return this.feedbacksService.findAll();
  }
}
