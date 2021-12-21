import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";



@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html'
})

export class EditPokemonComponent implements OnInit{
   pokemon :  any = null;
   constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonService)
   {}

   ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.pokemon = this.pokemonsService.getPokemon(id);
   }



}
