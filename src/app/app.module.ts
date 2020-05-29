import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColomnComponent } from './colomn/colomn.component';
import { CardComponent } from './card/card.component';
// import { LoginModule } from './login/login.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddCardComponent } from './add-card/add-card/add-card.component';
import { CardListService } from './card-list.service';


@NgModule({
  declarations: [
    AppComponent,
    ColomnComponent,
    CardComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LoginModule,
    ReactiveFormsModule, //two-way binding for Input -> [(ngModel)]
    FormsModule, //two-way binding for Input -> [(ngModel)]
  ],
  providers: [
    CardListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
