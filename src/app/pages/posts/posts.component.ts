import { Component, OnInit } from '@angular/core';
import { Post, PostsResult } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]=[];
  constructor(private service: PostsService) { 
    this.giveMePosts();
  }

  ngOnInit(): void {
  }

  giveMePosts(): void{
    this.service.getPosts().subscribe((result:PostsResult)=>{
      console.log(result.data);
      this.posts = result.data;
    });
  }

}
