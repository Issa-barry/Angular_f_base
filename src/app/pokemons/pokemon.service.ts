import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { POKEMONS } from "./donnees-pokemons/mock-pokemons";
import { Pokemon } from "./donnees-pokemons/pokemon";

//Un servicce n'est pas un composant mais plutot un `Ijectable`
@Injectable()

export class PokemonService{



  private pokemonUrl;
   //Retourn tous les pokemon
   getPokemons(): Observable<Pokemon[]>{
       return this.http.get<Pokemon []>(this.pokemonUrl).pipe(
         tap(_=>this.log(`fetched pokemons`)),
         catchError(this.handleError(`getPokemons`, []))

       );
   }

   private handleErro<T>(operation='operation', result?: T){
     return (error:any): Observable<
   }

   //Retourne le pokemon avec ID
    getPokemon(id: number): Observable<Pokemon>{
      const url = `${this.pokemonUrl}/${id}`;

      return this.http.get<Pokemon>(url).pipe(
        tap(_=>this.log('fetched pokemon id = ${id}')),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
    }

    getPokemonType(): string[]{
      return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];

    }
  }

