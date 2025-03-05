import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'animals',
  timestamps: true,
  updatedAt: false
})
export class Animal extends Model {
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
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  description: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  image_path: string;

  @CreatedAt
  created_at: Date;
}
