import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonsService } from '../pokemons.service';
// Importation du router pour les liens
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{

  pokemon: any = null;
  pokemonsData: any;

  constructor(private route : ActivatedRoute, private router: Router, private pokemonsService : PokemonsService){

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    this.pokemonsData = POKEMONS;
  }


  goBack(): void{
    this.router.navigate(['/pokemon/all']);
  }

  goEdit(pokemon : Pokemon): void{
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

    // Supression
    deletePokemon(id: number): any {
      this.pokemonsService.deletePokemon(id).subscribe(pokemon => this.pokemon = pokemon);
      return this.router.navigate(['/']);
    }

}
