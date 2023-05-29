import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-ver-posts',
  templateUrl: './ver-posts.component.html',
  styleUrls: ['./ver-posts.component.css'],
})
export class VerPostsComponent implements OnInit {
  responsePost: Post[] = [{ descricao: '', titulo: '', id: '' }];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => (this.responsePost = res));
  }

  deletar(post: Post) {
    this.postService.deletarPost(post.id).subscribe((res) => {
      window.location.reload();
    });
  }
}
