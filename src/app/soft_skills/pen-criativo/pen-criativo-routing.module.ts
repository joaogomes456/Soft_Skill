import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenCriativoPage } from './pen-criativo.page';

const routes: Routes = [
  {
    path: '',
    component: PenCriativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenCriativoPageRoutingModule {}
