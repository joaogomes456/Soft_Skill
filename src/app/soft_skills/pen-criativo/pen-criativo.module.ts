import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenCriativoPageRoutingModule } from './pen-criativo-routing.module';

import { PenCriativoPage } from './pen-criativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenCriativoPageRoutingModule
  ],
  declarations: [PenCriativoPage]
})
export class PenCriativoPageModule {}
