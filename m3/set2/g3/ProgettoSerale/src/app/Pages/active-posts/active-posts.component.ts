import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.css']
})


export class ActivePostsComponent {

activeArray:Post[] = []

constructor(private postSvc: PostsService){
  this.postSvc.getPost().then(post => {
    this.activeArray = post.filter(p => p.active)
  })
}
}
