import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabPressaoPageRoutingModule } from './trab-pressao-routing.module';

import { TrabPressaoPage } from './trab-pressao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabPressaoPageRoutingModule
  ],
  declarations: [TrabPressaoPage]
})
export class TrabPressaoPageModule {}
