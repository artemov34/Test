import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItemListPageComponent } from './item-list/item-list-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: ItemListPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
