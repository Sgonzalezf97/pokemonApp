import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonI } from '../interfaces/pokemon.interface';
import { PokemonList, Result } from '../interfaces/list.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonCallService {

  private apiUrl:string= "https://pokeapi.co/api/v2/pokemon/"
  private apiUrlList:string= "https://pokeapi.co/api/v2/pokemon/?limit=151"
  private apiUrlList2:string= "https://pokeapi.co/api/v2/pokemon/?limit=1000"
  constructor(private http: HttpClient) { }
  public pokemonArray=[]

  searchPokemon(query:string): Observable<PokemonI>{
    console.log(this.apiUrl)
    const url=`${this.apiUrl}${query}`;
    return this.http.get<PokemonI>(url)
  }
  searchPokemonById(query:number): Observable<PokemonI>{
    const url=`${this.apiUrl}${query}`;
    return this.http.get<PokemonI>(url)
  }

  listPokemon(): Observable <PokemonList>{
    return this.http.get<PokemonList>(this.apiUrlList)
  }

  completeList(): Observable <PokemonList>{
    return this.http.get<PokemonList>(this.apiUrlList2)
  }

  getSuggestions(): Observable<Result> {
    return this.http.get<Result>(`${this.apiUrlList2}`);
  }

}
