import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { MaterialModule } from '../material/material.module';
import { ExtractIndexPipe } from './pipes/extract-index.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from './pages/game-page/game-page/game-page.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    PokemonPageComponent,
    ExtractIndexPipe,
    GamePageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PokemonsModule { }
