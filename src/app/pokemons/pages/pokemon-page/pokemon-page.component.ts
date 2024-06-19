import { Component, Input, OnInit } from '@angular/core';
import { PokemonI } from '../../interfaces/pokemon.interface';
import { PokemonCallService } from '../../services/pokemon-call.service';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styles: ``
})
export class PokemonPageComponent implements OnInit{

  public pokemons?:PokemonI;

  constructor(
    private pokemonCallService: PokemonCallService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.pokemonCallService.searchPokemon(id)))
      .subscribe( pokemon => {
        this.pokemons = pokemon;
        console.log(pokemon)

      // .subscribe( (pokemon): any => {
      //   if (!pokemon) {
      //     return this.router.navigateByUrl('')
      //   }
      //   this.pokemons = pokemon;
      //   console.log(pokemon)
      //   return;

      });
      // subscribe(pokemons => this.pokemons = pokemons) )
      // Entender esta parte


  }
}
