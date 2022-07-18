import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';


const routes:Routes = [
{
  path:'posts',component:PostsComponent,title:"Posts"
},
{
  path:'comments',component:CommentsComponent, title:"Comments" , children:[
    {
      path:'5',component:CommentsComponent,title:"Comments"
    }
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
],
exports:[
  RouterModule
]
})
export class AppRoutingModule { }
