import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinicaoPageRoutingModule } from './definicao-routing.module';

import { DefinicaoPage } from './definicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinicaoPageRoutingModule
  ],
  declarations: [DefinicaoPage]
})
export class DefinicaoPageModule {}
