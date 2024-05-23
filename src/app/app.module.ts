import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { FinalComponent } from './components/final/final.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogListarComponent } from './components/blog/blog-listar/blog-listar.component';
import { BlogEditarComponent } from './components/blog/blog-editar/blog-editar.component';
@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
