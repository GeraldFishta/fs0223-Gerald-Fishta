import { Component, OnInit } from '@angular/core';
import { ClassTodo } from 'src/app/Classes/class-todo';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {

  isLoading = true
  todos: Todo [] = []
  newTask: Todo = new ClassTodo("", false )

  constructor(private todosService: TodosService) {}

      ngOnInit() : void {

      this.todosService.getTodos().then ((todos) => {
        this.todos = todos;

      this.isLoading = false;

      })

    }

    addNewTask() : void {
      this.todosService.addTodo(this.newTask)
    }

  }



