import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddTaskVisibile = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn everything of Angular quickly!',
      dueDate: '2024-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Do whatever is wrote before this!',
      dueDate: '2024-06-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Tanto va la gatta al lardo che ci mette lo zampino!',
      dueDate: '2024-06-24'
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  onStartAddTask() {
    this.isAddTaskVisibile = true;
  }

  onAddTaskCancel() {
    this.isAddTaskVisibile = false;
  }
}
