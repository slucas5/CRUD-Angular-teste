import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCriadoComSucesso } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-criar-posts',
  templateUrl: './criar-posts.component.html',
  styleUrls: ['./criar-posts.component.css'],
})
export class CriarPostsComponent implements OnInit {
  request: RequestCreate = {
    titulo: '',
    descricao: '',
  };

  response: ResponseCriadoComSucesso = {
    mensagem: '',
  };

  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  cadastrar() {
    console.log(this.request);
    this.postService.createPost(this.request).subscribe((res) => {
      this.response = res;
    });
  }
}
