import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AccordionModule} from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { PplService } from './Services/ppl.service';
import { HerosComponent } from './heros/heros.component';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddComponent } from './add/add.component';


let routes:Routes = [
  {path:"", component:HerosComponent},
  {path:"heros", component:HerosComponent},
  {path:"add", component:AddComponent},
  {path:"**", component:ErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HerosComponent,
    HeaderComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    ImageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ PplService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
