import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioRoutingModule {}
