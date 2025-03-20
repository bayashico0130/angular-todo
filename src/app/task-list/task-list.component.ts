import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { fromDocument, Task, TaskDocument } from '../../models/task';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule,
    TaskListItemComponent,
    TaskFormComponent,
    NzListItemComponent,
    NzListComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private firestore = inject(AngularFirestore);

  tasks: Task[] = [];

  public addTask(task: Task) {
    if (!task) return;
    const clone = Object.assign({}, task);
    delete clone.id;

    this.firestore.collection('tasks').add(clone);
  }

  public updateTask(task: Task): void {
    const clone = Object.assign({}, task);
    delete clone.id;

    this.firestore.collection('tasks').doc(task.id).update(clone);
  }

  ngOnInit(): void {
    this.firestore
      .collection<TaskDocument>('tasks')
      .valueChanges({ idField: 'id' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((tasks) => {
        this.tasks = tasks.map(fromDocument);
      });
  }
}
