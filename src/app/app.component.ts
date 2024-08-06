import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks = [
    {title: '牛乳を買う', done: false},
    {title: '可燃ゴミを出す', done: true},
    {title: '銀行に行く', done: false},
  ];
  newTaskTitle = '';

  addTask() {
    this.tasks.push({title: this.newTaskTitle, done: false});
    this.newTaskTitle = '';
  }
}
