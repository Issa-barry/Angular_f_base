import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule } from '@angular/forms';
import { importType } from '@angular/compiler/src/output/output_ast';
import { PokemonsModule } from './pokemons/pokemons.modules';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //Le routin toujours en dernier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
