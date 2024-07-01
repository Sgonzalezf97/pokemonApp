import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    // {label: 'Listado', icon:'label', url:'./list'},
    {label: 'Search', icon:'search', url:'./search'},
    {label: 'Game', icon:'games', url:'./game'},
  ]

}
