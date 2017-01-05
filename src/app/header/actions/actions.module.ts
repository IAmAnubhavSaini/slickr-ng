import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderActionsComponent } from './actions.component';

@NgModule({
  declarations: [
    HeaderActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeaderActionsComponent]
})
export class HeaderActionsModule { }
