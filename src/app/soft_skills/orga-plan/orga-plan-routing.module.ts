import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgaPlanPage } from './orga-plan.page';

const routes: Routes = [
  {
    path: '',
    component: OrgaPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgaPlanPageRoutingModule {}
