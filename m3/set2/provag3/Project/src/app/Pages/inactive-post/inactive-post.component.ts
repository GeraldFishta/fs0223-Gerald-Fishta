import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent {

  activeArrayPost:Post[] = []

    constructor(public PostSvc: PostService ) {

      this.activeArrayPost = this.PostSvc.getPosts(false)

}

ngOnInit(): void {
  this.activeArrayPost = this.PostSvc.getPosts(false)
}
}
