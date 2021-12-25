import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from '../donnees-pokemons/pokemon';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';
import { PokemonsService } from "../pokemons.service";


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
 //Variables
 @Input() pokemon : any;
 types: any = [];
 pokemons: Pokemon[];
 pokemonsData: any;
 searchText: string;
 term: string;

//Constructeur
constructor( private router: Router,private pokemonsService : PokemonsService)
{
 this.pokemons = [];
 this.searchText = "";
 this.term = "";
}
  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);

  }


   getValue(event: Event): string {
     this.term = (event.target as HTMLInputElement).value;
    return this.term;
  }

  selectPokemon(pokemon : Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
