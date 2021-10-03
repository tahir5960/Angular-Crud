import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeComponentListComponent } from './home.component-list/home.component-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomecomponentService } from './homecomponent.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeComponentListComponent,
    ReactiveFormComponent
 
 

  ],
  imports: [
    BrowserModule,
   FormControl,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HomecomponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
