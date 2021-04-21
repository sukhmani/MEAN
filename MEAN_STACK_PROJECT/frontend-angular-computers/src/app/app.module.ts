import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputersComponent } from './computers/computers.component';

import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
