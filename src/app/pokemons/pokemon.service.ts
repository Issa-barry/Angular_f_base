import { Injectable } from "@angular/core";
import { POKEMONS } from "./donnees-pokemons/mock-pokemons";
import { Pokemon } from "./donnees-pokemons/pokemon";

//Un servicce n'est pas un composant mais plutot un `Ijectable`
@Injectable()

export class PokemonService{
   //Retourn tous les pokemon
   getPokemons(): Pokemon[]{
     return POKEMONS;
   }

   //Retourne le pokemon avec ID
    getPokemon(id: number){
      let pokemons = this.getPokemons();
      for(let i = 0; i< pokemons.length; i++){
        if(pokemons[i].id  == id) return pokemons[i];
      }
      return false;
    }

    getPokemonType(): string[]{
      return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];

    }
  }

