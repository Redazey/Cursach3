import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'veterinarians',
  timestamps: true,
  updatedAt: false,
})
export class Veterinarian extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  middle_name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  phone: string;

  @CreatedAt
  created_at: Date;
}
