import { Injectable } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({

  providedIn: 'root'

})

export class PostsService {

  constructor() { }

  apiUrl: string = 'assets/db.json'

  getPost():Promise<Post[]> {
    return fetch(this.apiUrl).then(response => response.json())
  }

}
