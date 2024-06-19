import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'list',component: ListPageComponent},
      {path: 'search',component: SearchPageComponent},
      {path: ':id',component: PokemonPageComponent},
      {path: '**',redirectTo: 'search'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
