import { NgModule } from '@angular/core';

import { ItemListModule } from '@features/item-list';

import { ItemListPageComponent } from './item-list-page.component';

@NgModule({
  imports: [ItemListModule],
  declarations: [ItemListPageComponent]
})
export class ItemListPageModule {}
