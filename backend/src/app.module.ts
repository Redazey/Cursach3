import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { NewsModule } from './news/news.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';

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
    AuthModule,
    EmployeeModule,
    NewsModule,
    FeedbacksModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
