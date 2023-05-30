import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Component/nav/nav.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { ActivePostsComponent } from './Pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './Pages/inactive-posts/inactive-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
