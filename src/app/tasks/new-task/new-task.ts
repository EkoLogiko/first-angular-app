import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);

    this.close.emit();
  }
}
