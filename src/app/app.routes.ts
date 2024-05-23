import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'formulario',
    loadChildren: () =>
      import('./components/formulario/formulario.module').then(
        (m) => m.FormularioModule
      ),
  },
  {
    path: 'final',
    loadChildren: () =>
      import('./components/final/final.module').then((m) => m.FinalModule),
  },
  {
    path: 'formulario-editar',
    loadChildren: () =>
      import('./components/formulario-editar/formulario-editar.module').then((m) => m.FormularioEditarModule),
  },
  {
    path: 'blog-listar',
    loadChildren: () =>
      import('./components/blog/blog-listar/blog-listar.module').then((m) => m.BlogListarModule),
  },
  {
    path: 'blog-editar',
    loadChildren: () =>
      import('./components/blog/blog-editar/blog-editar.module').then((m) => m.BlogEditarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
