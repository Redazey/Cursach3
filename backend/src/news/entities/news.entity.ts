import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'clinic_news',
  timestamps: true,
  updatedAt: false,
})
export class ClinicNews extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  image_path: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  publication_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_important: boolean;

  @CreatedAt
  created_at: Date;
}
