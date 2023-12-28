import { Injectable } from '@angular/core';

import { Item } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ItemAdapterService {
  adapt(item: any) {
    return new Item(item.id, item.int, item.float, item.color, item.child);
  }
}
