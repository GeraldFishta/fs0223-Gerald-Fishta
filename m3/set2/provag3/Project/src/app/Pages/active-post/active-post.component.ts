import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {

  activeArrayPost:Post[] = []

  constructor(private PostSvc: PostService ) {

    this.PostSvc.getPosts().then(post =>
    {
      this.activeArrayPost = post.filter(p => p.active)
    }
      )


  }

}
