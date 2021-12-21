import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';



@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonComponent implements OnInit{

    pokemons: Pokemon[];

    constructor(private router: Router, private pokemonsService: PokemonService){
        this.pokemons = [];
    }

    ngOnInit(): void{
      this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon : Pokemon){
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
    }

}

