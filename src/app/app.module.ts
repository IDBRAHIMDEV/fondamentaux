import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { VoteComponent } from './vote/vote.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UsersComponent } from './users/users.component';

const myRoutes: Routes = [
  {path: "", redirectTo: '/courses', pathMatch: 'full'},
  {path: "courses", component: CoursesComponent},
  {path: "posts", component: PostsComponent},
  {path: "users", component: UsersComponent},
  {path: "posts/:id", component: PostDetailsComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PageNotFoundComponent,
    VoteComponent,
    FavoriteComponent,
    PanelComponent,
    PostsComponent,
    NavbarComponent,
    PostDetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
