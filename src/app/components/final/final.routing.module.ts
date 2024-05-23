import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FinalComponent,
  },
  {
    path: ':nome/:cpf',
    component: FinalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalRoutingModule {}
