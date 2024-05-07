import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  deleteOne(id: number): Promise<DeleteResult> {
    return this.tasksRepository.delete(id);
  }

  update(id: number, taskDto: TaskDto): Promise<UpdateResult> {
    const task: Task = new Task();
    task.description = taskDto.description;
    task.title = taskDto.title;
    return this.tasksRepository.update(id, task);
  }

  create(taskDto: TaskDto): Promise<Task> {
    const task: Task = new Task();
    task.description = taskDto.description;
    task.title = taskDto.title;
    return this.tasksRepository.save(task);
  }
}
