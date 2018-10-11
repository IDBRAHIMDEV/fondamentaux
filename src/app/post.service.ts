import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  
  sufixe = '/posts/';
  url = environment.url + this.sufixe;

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  persistPost(post) {
    return this.http.post(this.url, post);
  }

  updatePost(post) {
    return this.http.put(this.url + post.id, post);
  } 

  deletePost(id) {
    return this.http.delete(this.url + id);
  }
}
