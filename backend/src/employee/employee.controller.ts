import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Public } from 'src/common/decorators/public.decorator';
import { CreationAttributes } from 'sequelize';
import { Veterinarian } from './entities/employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @Public()
  findAll() {
    return this.employeeService.getEmployees();
  }
  @Post('create')
  deleteEmployee(@Body() employee: CreationAttributes<Veterinarian>) {
    return this.employeeService.createEmployee(employee);
  }
  @Post('delete/:id')
  createEmployee(@Param() id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}
