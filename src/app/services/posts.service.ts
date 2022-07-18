import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResult } from '../interfaces/posts';
import { ReturnStatement } from '@angular/compiler';
import { CommentsResult } from 'src/app/interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
    this.getPosts().subscribe((result: PostsResult)=>{
      console.log(result.data);
    });
  }

  getPosts(){
    return this.http.get<PostsResult>('http://localhost:3000/posts');
  }
  
  getComments(body: post_id){
    console.log(body)
    return this.http.put<CommentsResult>('http://localhost:3000/comments', body);
  }
  
  
}
export interface post_id{
    id: string
}