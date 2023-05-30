import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ActivePostsComponent } from './Pages/active-posts/active-posts.component';

const routes: Routes = [
{
path:"",
component: HomeComponent,
},
{
  path:"active-post",
  component: ActivePostsComponent,
},
{
  path:"inactive-post",
  component: ActivePostsComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
