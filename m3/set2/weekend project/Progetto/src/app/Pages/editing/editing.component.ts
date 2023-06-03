import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassTodo } from 'src/app/Classes/class-todo';
import { Todo } from 'src/app/Interfaces/todo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})


export class EditingComponent implements OnInit {

  isLoading = true

  editingTask: Todo = new ClassTodo("", false )

  constructor(private todosService: TodosService, private Router: ActivatedRoute) {}

  ngOnInit(): void {

    this.Router.params.subscribe((params:any) => {
      this.todosService.getSingleTodo(params.id).then(res =>{ this.editingTask = res ; this.isLoading = false })
    })

  }

  editedTask() : void {
    console.log(this.editingTask);

    this.todosService.updateTodo(this.editingTask)

  }

}




