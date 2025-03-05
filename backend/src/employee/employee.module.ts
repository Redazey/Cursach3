import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Veterinarian } from './entities/employee.model';

@Module({
  imports: [SequelizeModule.forFeature([Veterinarian])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
