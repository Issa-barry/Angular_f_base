import { Pipe, PipeTransform } from '@angular/core';

// Affiche la couleur correspondant au type du pokémon.
@Pipe({ name: 'pokemonRareteEtoile'})

export class PokemonRareteEtoilePipe implements PipeTransform{
  transform(rarete: number): string {

    let etoile: string;

    switch (rarete) {
      case 1:
        etoile = '*';
        break;
      case 2:
        etoile = '**';
        break;
      case 3:
        etoile = '***';
        break;
      case 4:
      etoile = '****';
        break;
      case 5:
        etoile = '*****';
        break;
      default:
        etoile = '*';
        break;
    }

    return  etoile;

  }
}
