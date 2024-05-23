import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalRoutingModule } from './final.routing.module';
import { FinalComponent } from './final.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FinalComponent],
  imports: [CommonModule, FinalRoutingModule, RouterModule],
})
export class FinalModule {}
