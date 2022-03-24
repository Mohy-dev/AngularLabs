import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegstComponent } from './mainAction/regst/regst.component';
import { TableComponent } from './mainAction/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './Routing/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Routing/about/about.component';
import { DetailsComponent } from './Routing/details/details.component';
import { ErrorComponent } from './Routing/error/error.component';


let routes:Routes = [
  {path:"reg", component:RegstComponent},
  {path:"table", component:TableComponent},
  {path:"about", component:AboutComponent},
  {path:"id", component:DetailsComponent},
  {path:"**", component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegstComponent,
    TableComponent,
    HeaderComponent,
    AboutComponent,
    DetailsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
