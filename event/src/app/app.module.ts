import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaiComponentComponent } from './pai-component/pai-component.component';
import { FilhoComponent } from './filho/filho.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponentComponent,
    FilhoComponent,
    StockStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
