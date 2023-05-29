import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerPostsComponent } from './ver-posts/ver-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarPostsComponent } from './criar-posts/criar-posts.component';
import { FormsModule } from '@angular/forms';
import { EditarPostComponent } from './editar-post/editar-post.component';

@NgModule({
  declarations: [AppComponent, VerPostsComponent, CriarPostsComponent, EditarPostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
