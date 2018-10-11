import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  etat: boolean = true;
  posts = [];

  post: Post = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.listPosts()
  }

  listPosts() {
    this.postService.getPosts().subscribe((posts) => {
     this.posts = posts.json();
    })
  }

  savePost(data) {

    console.log(data);

    if(data.valid) {
      console.log(data.value)
    }
    else {
      alert('sir tna3ss')
    }
    // this.postService.persistPost(this.post).subscribe((post) => {
    //   this.posts.unshift(post.json());
      
    //   //pour initilaser l'objet de databinding
    //   this.post = {
    //     userId: 0,
    //     id: 0,
    //     title: "",
    //     body: ""
    //   }
    // })
  }


  putPost() {
    this.postService.updatePost(this.post).subscribe(response => {
      console.log(response.json())
      this.etat = true;
      
      //pour initilaser l'objet de databinding
      this.post = {
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }
    })
  }

  editPost(post) {
    this.etat = false;
    this.post = post;
  }

  supprimerPost(id, index) {
     
    if(confirm('are you sure')) {
      this.postService.deletePost(id).subscribe(res => {
        console.log(res.json());
        this.posts.splice(index, 1);
       })
    }

    
  }


  log(myTitle) {
    console.log(myTitle);
  }

}
