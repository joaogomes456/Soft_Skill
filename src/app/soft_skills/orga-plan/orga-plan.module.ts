import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgaPlanPageRoutingModule } from './orga-plan-routing.module';

import { OrgaPlanPage } from './orga-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgaPlanPageRoutingModule
  ],
  declarations: [OrgaPlanPage]
})
export class OrgaPlanPageModule {}
