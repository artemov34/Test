import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, debounceTime, interval, switchMap } from 'rxjs';

import { Item } from '@entities/item/model/item.model';

import { ItemListFacadeService } from '../../services/facade.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items$!: Observable<Item[]>;
  form!: FormGroup;

  constructor(
    private readonly facadeService: ItemListFacadeService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      timer: [2000, [Validators.required, Validators.pattern('^[0-9]*$')]],
      size: [1000, [Validators.required, Validators.pattern('^[0-9]*$')]],
      additional_ids: ['']
    });

    this.setItems();

    this.form?.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.setItems();
    });
  }

  trackBy(_: number, item: Item) {
    return JSON.stringify(item);
  }

  setItems() {
    if (this.form.valid) {
      const { timer, size, additional_ids } = this.form.value;
      this.items$ = this.facadeService.getItems({
        timer,
        size,
        additional_ids: additional_ids.split(',')
      });
    }
  }
}
