import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})


export class ActivePostComponent implements OnInit {

  activeArrayPost:Post[] = []

    constructor(public PostSvc: PostService ) {

      this.activeArrayPost = this.PostSvc.getPosts(true)

  }

  ngOnInit(): void {
    this.activeArrayPost = this.PostSvc.getPosts(true)
  }

}
