import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from '../donnees-pokemons/pokemon';
import { POKEMONS } from '../donnees-pokemons/mock-pokemons';
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
})
export class NewPokemonComponent implements OnInit {
  //Variables
  @Input() pokemon : any;
  types: any = [];
  pokemons: Pokemon[];
  pokemonsData: any;
  pokemonForm: FormGroup;
  submited = false;

//Constructeur
  constructor(private fb: FormBuilder, private router: Router,private pokemonsService : PokemonsService)
   {
    this.pokemons = [];
    this.pokemonForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      hp: ['', [Validators.required, Validators.pattern("^[0-9]{1,3}$")] ],
      cp: ['', [Validators.required, Validators.pattern("^[0-9]{1,2}$")] ],

    });
  }
//NgOnInit Methode
  ngOnInit(): void {
    this.types = this.pokemonsService.getPokemonTypes();
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    this.pokemonsData = POKEMONS;

}
//Getters
get name(){
  return this.pokemonForm.get('name');
}

get points(){
  return this.pokemonForm.get('hp');
}

get degat(){
  return this.pokemonForm.get('cp');
}

  //OnSubmit methode
  onSubmit(): void {
      // console.log(this.pokemonForm.value.name);

     this.submited = false;
     if(this.pokemonForm.invalid) return;
     else{
           let pokemonToAdd =  new Pokemon();
           pokemonToAdd.id = this.pokemonsData.length+1;
           pokemonToAdd.name = this.name?.value;
           pokemonToAdd.hp = this.points?.value;
           pokemonToAdd.cp = this.degat?.value;

           //On Ajoute les données dans pokemonData
           this.pokemonsData.push(pokemonToAdd);
          //  console.log(this.pokemonsData);
          this.router.navigate(['/']);
     }

  }
}
