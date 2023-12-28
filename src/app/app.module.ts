import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ItemListPageModule } from '@pages/item-list/item-list-page.module';

import { AppRoutingModule } from './pages/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
