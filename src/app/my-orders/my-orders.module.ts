import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import {MyOrdersComponent} from './my-orders.component'

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CommonModule,
    MyOrdersRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MyOrdersModule { }
