import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntEmocionalPage } from './int-emocional.page';

const routes: Routes = [
  {
    path: '',
    component: IntEmocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntEmocionalPageRoutingModule {}
