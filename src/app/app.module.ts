import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
  ],

})
export class AppModule { }
