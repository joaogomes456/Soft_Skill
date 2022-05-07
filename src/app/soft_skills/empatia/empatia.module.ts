import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpatiaPageRoutingModule } from './empatia-routing.module';

import { EmpatiaPage } from './empatia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpatiaPageRoutingModule
  ],
  declarations: [EmpatiaPage]
})
export class EmpatiaPageModule {}
