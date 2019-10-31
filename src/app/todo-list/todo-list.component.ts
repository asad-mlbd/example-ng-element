import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-todo-list",
  template: `
    <p>{{ name }}'s todo list</p>
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.title }}
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  @Input("name") name: string;
  @Output() dataLoaded = new EventEmitter();
  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(todos => {
      this.todos = todos;
      this.dataLoaded.emit(todos);
    });
  }
}
