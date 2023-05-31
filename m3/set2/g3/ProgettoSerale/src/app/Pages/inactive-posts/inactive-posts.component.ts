import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.css']
})


export class InactivePostsComponent {

  activeArray:Post[] = []

  constructor(private postSvc: PostsService){
    this.postSvc.getPost().then(post => {
      this.activeArray = post.filter(p => !p.active)
    })
  }
}
