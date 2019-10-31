import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-todo-list",
  template: `
    <p>todo-list works!</p>
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
  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(todos => (this.todos = todos));
  }
}
