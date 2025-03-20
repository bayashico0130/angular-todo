import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [FormsModule, NzCheckboxComponent, NzTagComponent, DatePipe],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.scss',
})
export class TaskListItemComponent {
  @Input() task!: Task;
  @Output() updateTask = new EventEmitter<Task>();

  public isOverdue(task: Task) {
    return (
      !task.done &&
      task.deadline &&
      task.deadline.getTime() < new Date().setHours(0, 0, 0, 0)
    );
  }

  public onToggleDone(task: Task): void {
    console.log(task.done);
    this.updateTask.emit(task);
  }
}
