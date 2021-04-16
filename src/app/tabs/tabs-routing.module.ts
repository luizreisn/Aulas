import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'people',
        loadChildren: () => import('./people/people.module').then( m => m.PeoplePageModule)
      },
      {
        path: 'options',
        loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
