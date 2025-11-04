import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn everything of Angular quickly!',
      dueDate: '2024-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Do whatever is wrote before this!',
      dueDate: '2024-06-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Tanto va la gatta al lardo che ci mette lo zampino!',
      dueDate: '2024-06-24',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
