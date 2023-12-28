import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ItemListComponent],
  exports: [ItemListComponent]
})
export class ItemListModule {}
