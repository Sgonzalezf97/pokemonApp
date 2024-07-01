import { Component, OnInit } from '@angular/core';
import { PokemonI } from '../../../interfaces/pokemon.interface';
import { PokemonCallService } from '../../../services/pokemon-call.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PokemonList, Result } from '../../../interfaces/list.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../components/dialog/dialog.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit {

  public pokemons?:PokemonI;
  public pokemonsList?:PokemonList;
  public pokemonId:number = 10;
  public searchInput = new FormControl('');
  public selectedPokemon?:Result;
  public listPokemons: string[] = [];
  public nameList: string[]=[];
  public isTheRightPokemon:boolean = false;
  public lifeAmount: number =5;
  public lifeAmountArray: number[]=[] ;

  constructor(
    private pokemonCallService: PokemonCallService,
    private dialog: MatDialog
  ){
    this.lifeAmountArray = Array.from({ length: this.lifeAmount }, (_, i) => i);
  }

  ngOnInit(): void {
    this.pokemonId= this.randomPokemon();
    this.pokemonCallService.searchPokemonById(this.pokemonId)
    .subscribe( pokemon => {
      this.pokemons = pokemon;
      // console.log(pokemon)
    })

    this.pokemonCallService.completeList()
    .subscribe(pokemonL => {
      this.pokemonsList = pokemonL;
      // console.log(this.pokemonsList)
    });
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent):void{
    if (!event.option.value) {
      this.selectedPokemon=undefined;
      return;
    }
    // console.log(event.option.value)
    this.nameList.push(event.option.value)
    if (this.pokemons?.name === event.option.value) {
      this.isTheRightPokemon = true;
      const dialogRef = this.dialog.open(DialogComponent,{
        data:{
          title:'Ganaste',
          text:'Has adivinado correctamente el nombre del pokémon',

        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      })
    }else{
      this.lifeAmount = this.lifeAmount - 1;
      this.lifeAmountArray = Array.from({ length: this.lifeAmount }, (_, i) => i);
    }
    console.log(this.lifeAmount)

    if (this.lifeAmount === 0){
      const dialogRef = this.dialog.open(DialogComponent,{
        data:{
          title:'Perdiste',
          text:'Has superado el numero máximo de intentos',
          name:this.pokemons?.name
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      })
    }

  }

  searchPokemon(){
    const value: string = this.searchInput.value || '';
    let pokemonArray = [];
    // console.log(value)
    if (this.pokemonsList?.results != undefined) {
      for (let i = 0; i < this.pokemonsList?.results.length; i++) {
        let pokeList = this.pokemonsList.results[i]
        if (pokeList.name.includes(value.toLowerCase())) {
          pokemonArray.push(pokeList.name)
          // console.log(pokeList.name)
        }
      }
      pokemonArray.sort()
      // console.log(pokemonArray)
    }
    this.listPokemons = pokemonArray
    // return pokemonArray
  }

  randomPokemon() {
    let randomInt = Math.floor(Math.random() * 1001);
    return randomInt
  }
}
