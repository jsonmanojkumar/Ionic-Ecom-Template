import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import {CouponComponent} from './coupon.component';

@NgModule({
  declarations: [CouponComponent],
  imports: [
    CommonModule,
    CouponRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CouponModule { }
