import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil, tap, interval } from 'rxjs';

import { Item } from '@entities/item/model';
import { ItemAdapterService } from '@entities/item/application';

export interface SocketSetting {
  timer: number;
  size: number;
  additional_ids: Item['id'][];
}

@Injectable({
  providedIn: 'root'
})
export class ItemListFacadeService {
  private worker: Worker;
  private items = new BehaviorSubject<Item[]>([]);
  private cancel$ = new Subject();

  constructor(private readonly itemAdapterService: ItemAdapterService) {
    this.worker = new Worker(new URL('./item.worker', import.meta.url));

    this.worker.onmessage = ({ data }) => {
      this.items.next(data.map((item: Item) => this.itemAdapterService.adapt(item)));
    };
  }

  setObservable({ timer, size, additional_ids }: SocketSetting) {
    this.cancel$.next(null);
    interval(timer)
      .pipe(takeUntil(this.cancel$))
      .subscribe(() => {
        this.worker.postMessage({ size, additional_ids });
      });
  }

  getItems(settings: SocketSetting): Observable<Item[]> {
    this.setObservable(settings);
    return this.items.asObservable().pipe(
      tap(items => {
        console.log('Check item instace: ', items);
      })
    );
  }
}
