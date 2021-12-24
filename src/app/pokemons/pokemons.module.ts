import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonRareteEtoilePipe } from "./pipes/pokemon-rarete-etoile.pipe";
import { BorderCardDirective  } from './directives/border-card.directive';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PokemonsService } from './pokemons.service';
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { LoaderComponent } from "../loader.component";
import { NewPokemonComponent } from "./new-pokemon/new-pokemon.component";

import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DetailPokemonComponent,
    PokemonComponent,
    PokemonTypeColorPipe,
    PokemonRareteEtoilePipe,
    BorderCardDirective,
    EditPokemonComponent,
    FormPokemonComponent,
    NewPokemonComponent,

    LoaderComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  providers: [PokemonsService],
  bootstrap: []
})
export class PokemonsModule { }
