import { Injectable } from '@angular/core';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root'
})


export class TodosService {

  public apiUrl= "http://localhost:3000/todos";

  constructor() { }


  getSingleTodo(id:number): Promise<Todo> {

    return fetch(this.apiUrl + "/" + id ).then((response) => response.json())

  }

  getTodos(): Promise<Todo[]> {

    return fetch(this.apiUrl)
      .then((response) => response.json())

  }


  addTodo(todo: Todo): Promise<Todo> {

      return fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(todo)
        })
        .then((response) => response.json())

  }



//anche se non previsto dalla consegna ho deciso di aggiungere il metodo per completare la lista CRUD

  removeTodo(id:number): Promise<Todo> {

      return fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE'
          })
          .then((response) => response.json())

  }



  updateTodo(todo:Todo): Promise<Todo> {

       return fetch (`${this.apiUrl}/${todo.id}`,{
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(todo)
        })
        .then((response) => response.json())

  }




}




