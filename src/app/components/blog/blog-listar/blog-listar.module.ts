import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListarComponent } from './blog-listar.component';
import { BlogListarRoutingModule } from './blog-listar.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogListarComponent],
  imports: [
    CommonModule,
    BlogListarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class BlogListarModule {}
