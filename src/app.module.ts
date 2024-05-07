import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { TaskController } from './task/task.controller';
import { TasksModule } from './task/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'task-db',
      entities: [Task],
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
