import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './heroes/components/create/create.component';
import { ReadDeleteComponent } from './heroes/components/read-delete/read-delete.component';
import { heroReducer } from "./heroes/reducers/hero-reducer";



@NgModule({
  declarations: [
    AppComponent,
    ReadDeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { heroes: heroReducer }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
