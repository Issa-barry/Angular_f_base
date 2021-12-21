import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective  } from './directives/border-card.directive';
import { EditPokemonComponent }  from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [
    DetailPokemonComponent,
    PokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    EditPokemonComponent,
    FormPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonsModule { }
