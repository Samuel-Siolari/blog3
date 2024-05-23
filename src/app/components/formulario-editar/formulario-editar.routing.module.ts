import { RouterModule, Routes } from '@angular/router';
import { FormularioEditarComponent } from './formulario-editar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FormularioEditarComponent,
  },
  {
    path: ':id',
    component: FormularioEditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEditarRoutingModule {}
