import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {TaskListComponent} from "./task-list/task-list.component";
import {NzListModule} from "ng-zorro-antd/list";
import {NzGridModule} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NzPageHeaderModule, NzListModule, TaskListComponent, NzGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
