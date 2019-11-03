import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],

  /** We no more need bootstrap the app component */
  // bootstrap: [AppComponent],

  /** Declare todo list component as entryComponents */
  entryComponents: [TodoListComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(TodoListComponent, {
      injector: this.injector
    });
    customElements.define("my-todo-list", el);
  }
}
