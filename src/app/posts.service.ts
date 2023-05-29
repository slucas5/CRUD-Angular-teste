import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Post,
  RequestCreate,
  RequestUpdate,
  ResponseCriadoComSucesso,
  ResponseUpdate,
} from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/todos-post');
  }

  createPost(request: RequestCreate): Observable<any> {
    return this.http.post(this.url + '/cadastrar-post', request);
  }

  updatePost(request: RequestUpdate, id: string): Observable<any> {
    return this.http.put(`${this.url}/editar-post/${id}`, request);
  }

  deletarPost(id: string): Observable<any> {
    return this.http.delete(`${this.url}/deletar-post/${id}`);
  }
}
