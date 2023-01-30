import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackOrderRoutingModule } from './track-order-routing.module';
import {TrackOrderComponent} from './track-order.component'

@NgModule({
  declarations: [TrackOrderComponent],
  imports: [
    CommonModule,
    TrackOrderRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TrackOrderModule { }
