import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'feedbacks',
  timestamps: true,
  updatedAt: false
})
export class Feedback extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  nickname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  feedback_text: string;

  @Column({
    type: DataType.DATE,
  })
  edited_at: Date;

  @CreatedAt
  created_at: Date;
}