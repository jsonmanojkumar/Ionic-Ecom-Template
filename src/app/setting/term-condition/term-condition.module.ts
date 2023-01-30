import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermConditionRoutingModule } from './term-condition-routing.module';
import {TermConditionComponent} from './term-condition.component';

@NgModule({
  declarations: [TermConditionComponent],
  imports: [
    CommonModule,
    TermConditionRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TermConditionModule { }
