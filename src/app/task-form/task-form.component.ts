import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzInputGroupComponent,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputDirective,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  newTask = {
    title: '',
    deadline: undefined,
  };

  submit() {
    this.addTask.emit({
      title: this.newTask.title,
      done: false,
      deadline: this.newTask.deadline,
    });
    this.newTask = {
      title: '',
      deadline: undefined,
    };
  }
}
