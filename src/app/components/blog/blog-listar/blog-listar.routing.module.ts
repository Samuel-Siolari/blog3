import { RouterModule, Routes } from '@angular/router';
import { BlogListarComponent } from './blog-listar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlogListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogListarRoutingModule {}
