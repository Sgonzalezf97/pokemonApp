import { Component } from '@angular/core';
import { PokemonList } from '../../interfaces/list.interface';
import { PokemonCallService } from '../../services/pokemon-call.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public pokemons?:PokemonList;
  public value?:string=" ";

  public searchInput = new FormControl('');

  constructor( private pokemonCallService: PokemonCallService){}

  ngOnInit(): void {
      this.pokemonCallService.listPokemon().subscribe(pokemons => this.pokemons = pokemons);
  }



  redirectPokemon(pokemon:any){
    location.href="/pokemon/"+pokemon;
  }

  searchPokemon(){
    const value: string = this.searchInput.value || '';
    console.log({value})
  }

  // onselectedoption(event: string):void{
  //   console.log(event)
  // }
}
