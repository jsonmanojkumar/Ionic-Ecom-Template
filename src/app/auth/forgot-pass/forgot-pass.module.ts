import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPassRoutingModule } from './forgot-pass-routing.module';
import { ForgotPassComponent } from './forgot-pass.component';


@NgModule({
  declarations: [ForgotPassComponent],
  imports: [
    CommonModule,
    ForgotPassRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ForgotPassModule { }
