import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinicaoPage } from './definicao.page';

const routes: Routes = [
  {
    path: '',
    component: DefinicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinicaoPageRoutingModule {}
