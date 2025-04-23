import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Feedback } from './entities/feedback.entity';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class FeedbacksService {
  constructor(@InjectModel(Feedback) private feedbackModel: typeof Feedback) {}

  async create(createFeedbackDto: CreationAttributes<Feedback>) {
    return this.feedbackModel.create(createFeedbackDto);
  }

  async findAll() {
    return this.feedbackModel.findAll();
  }

  async delete(Id: number) {
    return this.feedbackModel.destroy({
      where: {
        id: Id,
      },
    });
  }
}
