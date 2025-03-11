import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { EmployeeModule } from './employee/employee.module';
import { NewsModule } from './news/news.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'backend',
      password: 'backend!',
      database: 'veterenary',
      autoLoadModels: true,
      synchronize: true,
    }),
    AnimalsModule,
    EmployeeModule,
    NewsModule,
    FeedbacksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
