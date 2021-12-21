import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';
// Importation du router pour les liens
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{

  pokemons: Pokemon[];
  pokemon: any = null;

  constructor(private route : ActivatedRoute, private router: Router,
              private pokemonsService: PokemonService)
  {
    this.pokemons = [];
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonsService.getPokemon(id);
  }


  goBack(): void{
    this.router.navigate(['/pokemon/all']);
  }

  goEdit(pokemon : Pokemon): void{
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

}
