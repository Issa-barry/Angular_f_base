import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

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
  raretes: any = [];
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
      website: this.fb.array([], [Validators.required]),
      choixImage: this.fb.array([], [Validators.required]),

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
get website(){
  return this.pokemonForm.get('website')
}
//Traitement du formulaire
  // Méthode appelée lorque l'utilisateur ajout ou retire un type au pokemon
  selectType($event: any, type: string): void{
    let checked = $event.target.checked;
    if(checked){
      this.pokemon.types.push(type);
    }else{
      let index = this.pokemon.types.indexOf(type);
      if(index > -1){
        this.pokemon.types.splice(index, 1);
      }
    }
  }


  onCheckboxChange(e: any, type:string) {
    const website: FormArray = this.pokemonForm.get('website') as FormArray;this.website as FormArray;
    let  taille = this.website?.value.length;


    if (e.target.checked) {

        if(taille < 3)
        {
          website.push(new FormControl(e.target.value));
        }
        else
        {
          let index = this.website?.value.indexOf(type);
          website.removeAt(index);
          website.push(new FormControl(e.target.value));
        }

    }else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
   }



  }

  //OnSubmit methode
  onSubmit(): void {
      // console.log(this.pokemonForm.value.name);

     this.submited = false;
     if(this.pokemonForm.invalid) return;
     else{
           let pokemonToAdd =  new Pokemon();
           let typeData;

           pokemonToAdd.id = this.pokemonsData.length+1;
           pokemonToAdd.name = this.name?.value;
           pokemonToAdd.hp = this.points?.value;
           pokemonToAdd.cp = this.degat?.value;
           //Ajout du type

           for(let i =1; i< this.website?.value.length; i++)
           {
            pokemonToAdd.types.push(this.website?.value[i])
           }


           //On Ajoute les données dans pokemonData
           this.pokemonsData.push(pokemonToAdd);
           this.pokemonsData.splice(1, 1,this.website?.value[0]);
           console.log(this.pokemonsData);
          this.router.navigate(['/']);
     }

  }

  /*********************************************************************************
   * onCheckboxChange(e: any) {
    const website: FormArray = this.pokemonForm.get('website') as FormArray;this.website as FormArray;

    if (e.target.checked) {
      website.push(new FormControl(e.target.value));

    }else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
   }

   console.log(this.website);

  }
   */
}
