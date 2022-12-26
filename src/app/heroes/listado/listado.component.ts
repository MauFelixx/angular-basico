import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Superman', 'Capitán América'];
  borrados: string = '';

  borrarHeroe(){
    this.borrados = this.heroes.shift() || '';
  }
}
