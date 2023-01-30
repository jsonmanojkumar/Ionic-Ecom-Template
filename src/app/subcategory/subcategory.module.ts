import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryComponent } from './subcategory.component';


@NgModule({
  declarations: [SubcategoryComponent],
  imports: [
    CommonModule,
    SubcategoryRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SubcategoryModule { }
