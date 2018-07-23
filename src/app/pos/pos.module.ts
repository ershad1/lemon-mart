import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';
import {SharedModule} from '../share/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule,
    SharedModule
  ],
  declarations: [PosComponent]
})
export class PosModule { }
