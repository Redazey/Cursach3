import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { EmployeeModule } from './employee/employee.module';
import { NewsModule } from './news/news.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'backend1!',
      database: 'veterenary',
      autoLoadModels: true,
      synchronize: true,
    }),
    AnimalsModule,
    EmployeeModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
