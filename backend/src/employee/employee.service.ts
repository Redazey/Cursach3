import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Veterinarian } from './entities/employee.model';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Veterinarian) private employeeModel: typeof Veterinarian) {}
  
  async getEmployees() {
    return this.employeeModel.findAll();
  }
}
