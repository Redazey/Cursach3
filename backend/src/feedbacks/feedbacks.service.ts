import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbacksService {
  constructor(@InjectModel(Feedback) private feedbackModel: typeof Feedback) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    console.log(createFeedbackDto)
    return this.feedbackModel.create(
      { 
        nickname: createFeedbackDto.nickname, 
        feedback_text: createFeedbackDto.feedback_text
      })
  }

  async findAll() {
    return this.feedbackModel.findAll();
  }
}
