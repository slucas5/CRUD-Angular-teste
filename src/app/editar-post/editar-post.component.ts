import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { RequestUpdate, ResponseUpdate } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css'],
})
export class EditarPostComponent implements OnInit {
  id: string | null = '';
  request: RequestUpdate = {
    titulo: '',
    descricao: '',
  };

  responseUpdate: ResponseUpdate = {
    descricao: '',
    id: '',
    titulo: '',
  };

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  update() {
    if (this.id) {
      this.postService.updatePost(this.request, this.id).subscribe((res) => {
        console.log(res);
        this.responseUpdate = res;
      });
    }
  }
}
