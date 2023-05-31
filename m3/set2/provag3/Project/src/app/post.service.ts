import { Injectable } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts():Promise<Post[]> {
    return fetch("assets/db.json").then(res => res.json())
  }
}
