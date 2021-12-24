import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
import { Pokemon } from '../donnees-pokemons/pokemon';

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent implements OnInit{

  @Input() pokemon : any;
  types: any = [];
  pokemons: Pokemon[];
  pokemonToEdit: any;

  constructor(private route : ActivatedRoute, private router: Router,  private pokemonsService : PokemonsService){
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.types = this.pokemonsService.getPokemonTypes();
    this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);//Pour recuperer les images
  }
  //Détermine si le type passé en paramètre appartient ou non au pokémon
  hasType(type: string) :boolean{
    let index = this.pokemon.types.indexOf(type);
    if(index > -1) return true;

    return false;
  }

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
  // Valide le nombre de types pour chaque pokemon
  isTypesValid(type :string): boolean{
    if( this.pokemon.types.length === 1 && this.hasType(type)){
      return false;
    }
    if( this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  goBack(): void{
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

  onSubmit(): void{
     this.pokemonToEdit =     this.pokemonsService.updatePokemon(this.pokemon).subscribe(pokemon => this.pokemon = pokemon);

    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }
}
