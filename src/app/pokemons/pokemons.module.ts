import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule
  ]
})
export class PokemonsModule { }
