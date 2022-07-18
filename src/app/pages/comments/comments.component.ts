import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommentsResult, Comment } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[]=[];
  
  URLactual = window.location.pathname;
  words = this.URLactual.split('/comments/');
  body = { "id": this.words[1] };
  //body = JSON.stringify({ "id": this.words[1] })



  //producto = this.urlParams.get('post_id');

  constructor(private service: PostsService) {
    this.giveMeComments();
    console.log(this.body);
  }
  
  ngOnInit():void {}
  
  giveMeComments():void {
    this.service.getComments(this.body).subscribe((result:CommentsResult)=>{
      console.log(result.data);
      this.comments = result.data;
    });
  }
  
  
  
}
