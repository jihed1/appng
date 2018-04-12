import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'uppercase',  component: UppercaseComponent }
   ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
  RouterModule.forRoot(appRoutes),
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
