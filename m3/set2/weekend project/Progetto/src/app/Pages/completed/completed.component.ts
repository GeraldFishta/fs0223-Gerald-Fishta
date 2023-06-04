import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})



export class CompletedComponent implements OnInit {


  isLoading = true
  todos: Todo [] = []

  constructor(public todosService: TodosService) {}

      ngOnInit() : void {

      this.todosService.getTodos().then ((todos) => {
        this.todos = todos.filter((completato) =>{
          return completato.completed == true
        })

        this.isLoading = false;

      })

    }

    deleteThisTask(deleteTask: Todo) : void {

      let taskId = deleteTask.id

      if (taskId) {
        this.todosService.removeTodo(taskId).then(()=>{
        this.todos = this.todos.filter((todo) => todo.id !== taskId)
      })
     }



    }

}
