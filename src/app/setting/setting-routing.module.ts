import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingComponent} from './setting.component';


const routes: Routes = [
  {
    path: '',
    component: SettingComponent
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'term-condition',
    loadChildren: () => import('./term-condition/term-condition.module').then(m => m.TermConditionModule)
  },
  {
    path: 'pilicy',
    loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
