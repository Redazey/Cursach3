export class CreateFeedbackDto {
  nickname: string;
  feedback_text: string;
  created_at: Date;
  edited_at?: Date;
}
