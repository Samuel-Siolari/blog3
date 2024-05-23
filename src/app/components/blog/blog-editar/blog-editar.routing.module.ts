import { RouterModule, Routes } from '@angular/router';
import { BlogEditarComponent } from './blog-editar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlogEditarComponent,
  },
  {
    path: ':id',
    component: BlogEditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogEditarRoutingModule {}
