import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipe } from './app/custom.pipe';

@NgModule({
  declarations: [
    CustomPipe,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    CustomPipe
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
