import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})

export class FormPokemonComponent implements OnInit{
  @Input() pokemon: any;
  types: any = [];

     constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonService){}

     ngOnInit(): void {
         this.types = this.pokemonsService.getPokemonType();
     }

     //Déterminer si le type passé en paramettre existe
     hasType(type:string): boolean{
        let index = this.pokemon.types.indexOf(type);
        if (index >-1) return true;

        return false;
     }

    //  Methode appelée lorsque l'utilisateur ajoute ou retir un type au pokemon
    selectType($event: any, type: string ): void{
     let checked = $event.target.checked;

     if(checked){
       this.pokemon.types.push(type);
     }else{
       let index = this.pokemon.types.indexOf(type)//on recupere l'index
       if(index > -1){
         this.pokemon.types.splice(index, 1) //le "splice" permet d'enlever l'ancien elt dans le tableau
       }
     }
    }

    //Verication si le type est valide
    isTypesValid(type: string): boolean{
       if(this.pokemon.types.length === 1 && this.hasType(type)){
         return false;
       }
       if(this.pokemon.types.length >= 3 && !this.hasType(type))
       {
         return false;
       }
       return true;
    }

     onSubmit(): void{
        let link = ['/pokemon/', this.pokemon.id];
        this.router.navigate(link);
     }
}
