import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPostsComponent } from './ver-posts/ver-posts.component';
import { CriarPostsComponent } from './criar-posts/criar-posts.component';
import { EditarPostComponent } from './editar-post/editar-post.component';

const routes: Routes = [
  { path: 'ver-posts', component: VerPostsComponent },
  { path: 'criar-post', component: CriarPostsComponent },
  { path: 'editar-post/:id', component: EditarPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
