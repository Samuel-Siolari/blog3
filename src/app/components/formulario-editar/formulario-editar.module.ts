import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEditarComponent } from './formulario-editar.component';
import { FormularioEditarRoutingModule } from './formulario-editar.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormularioEditarComponent],
  imports: [
    CommonModule,
    FormularioEditarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class FormularioEditarModule {}
