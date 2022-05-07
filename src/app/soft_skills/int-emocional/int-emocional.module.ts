import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntEmocionalPageRoutingModule } from './int-emocional-routing.module';

import { IntEmocionalPage } from './int-emocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntEmocionalPageRoutingModule
  ],
  declarations: [IntEmocionalPage]
})
export class IntEmocionalPageModule {}
