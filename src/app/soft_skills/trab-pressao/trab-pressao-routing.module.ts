import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabPressaoPage } from './trab-pressao.page';

const routes: Routes = [
  {
    path: '',
    component: TrabPressaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabPressaoPageRoutingModule {}
