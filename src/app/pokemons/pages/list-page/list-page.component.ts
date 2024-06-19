import { Component } from '@angular/core';
import { PokemonList } from '../../interfaces/list.interface';
import { PokemonCallService } from '../../services/pokemon-call.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {

  public pokemons?:PokemonList;

  constructor( private pokemonCallService: PokemonCallService){}

  ngOnInit(): void {
      this.pokemonCallService.listPokemon().subscribe(pokemons => this.pokemons = pokemons);
  }

  redirectPokemon(pokemon:any){
    location.href="/pokemon/"+pokemon;
  }

}
