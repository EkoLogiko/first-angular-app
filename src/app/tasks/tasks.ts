import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddTaskVisibile = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddTaskVisibile = true;
  }

  onCloseAddTask() {
    this.isAddTaskVisibile = false;
  }
}
