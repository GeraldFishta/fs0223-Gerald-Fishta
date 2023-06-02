import { Injectable } from '@angular/core';
import { Todo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public apiUrl= "http://localhost:3000/todos";

  constructor() { }


  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(this.apiUrl)
          .then((response) => response.json())
          .then((todos) => {
            resolve(todos);
          });
      }, 2000);
    });
  }

  addTodo(todo: Todo): Promise<Todo> {

    return new Promise((resolve)  => {

      setTimeout(() =>{
        fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(todo)
        })
        .then((response) => response.json())
        .then((newTodo) => {resolve(newTodo)
        })
      }, 2000)
    })
  }



  removeTodo(id:number): Promise<void> {

    return new Promise((resolve) => {
      setTimeout(() =>{

        fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE'
          })
        .then(() => {
          resolve()
        })


      }, 2000)
    })
  }



}

