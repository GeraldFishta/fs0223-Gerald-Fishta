import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ActivePostComponent } from './Pages/active-post/active-post.component';
import { InactivePostComponent } from './Pages/inactive-post/inactive-post.component';

const routes: Routes = [

 { path : "", component: HomeComponent },
 { path : "activepostpath", component: ActivePostComponent },
 { path : "inactivepostpath", component: InactivePostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
