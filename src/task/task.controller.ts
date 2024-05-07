import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { UpdateResult } from 'typeorm';

@Controller('api/tasks/')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public async getTasks() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  public async getTask(@Param('id') id: number) {
    return await this.taskService.findOne(id);
  }

  @Post()
  public async create(@Body() taskDto: TaskDto): Promise<Task> {
    return await this.taskService.create(taskDto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() taskDto: TaskDto,
  ): Promise<UpdateResult> {
    return await this.taskService.update(id, taskDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.taskService.deleteOne(id);
  }
}
