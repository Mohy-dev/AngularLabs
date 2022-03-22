import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistComponent } from './regist/regist.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
