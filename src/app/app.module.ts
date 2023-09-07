import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
