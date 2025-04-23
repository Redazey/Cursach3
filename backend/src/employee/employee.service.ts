import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Veterinarian } from './entities/employee.entity';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Veterinarian) private employeeModel: typeof Veterinarian,
  ) {}

  async getEmployees() {
    return this.employeeModel.findAll();
  }
  async createEmployee(employee: CreationAttributes<Veterinarian>) {
    return this.employeeModel.create(employee);
  }
  async deleteEmployee(id: number) {
    return this.employeeModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
