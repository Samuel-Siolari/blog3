import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEditarComponent } from './blog-editar.component';
import { BlogEditarRoutingModule } from './blog-editar.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogEditarComponent],
  imports: [
    CommonModule,
    BlogEditarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
})
export class BlogEditarModule {}
