import { Injectable } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPost: Post[] = [
    {
        "id":1,
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
        "title" : "dolor sit amet con et element nulla pariatur et sdrogo",
        "active" : true,
        "type" : "news"
       },
       {
        "id":2,
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
        "title" : "dolor sit amet con et element nulla pariatur et sdrogo",
        "active" : true,
        "type" : "politic"

       },
       {
        "id":3,
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
        "title" : "dolor sit amet con et element nulla pariatur et sdrogo",
        "active" : true,
        "type" : "education"
       },
       {
        "id":4,
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
        "title" : "dolor sit amet con et element nulla pariatur et sdrogo",
        "active" : false,
        "type" : "news"
       },
       {
        "id":5,
        "body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
        "title" : "dolor sit amet con et element nulla pariatur et sdrogo",
        "active" : false,
        "type" : "politic"
       }

   ]


  constructor() { }

  getPosts(veroFalso:boolean):Post[] {
    return this.arrayPost.filter(post => post.active == veroFalso)
  }
}
