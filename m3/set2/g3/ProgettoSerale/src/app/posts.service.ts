import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({

  providedIn: 'root'

})

export class PostsService {

  postArray: Post[]= [
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
        "type" : "political"
       }

   ]

  constructor() { }

  ;


  getPost(activeInactive: boolean): Post[] {
    if(activeInactive) {
      return this.postArray.filter((p: Post) => p.active )
    }
    else {
      return this.postArray.filter((p: Post) => !p.active )
    }
  }
  }




