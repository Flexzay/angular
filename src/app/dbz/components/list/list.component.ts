import { Component, Input, input } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


@Input()
public listaCaracter: Character[] =[{
  name: 'trunk',
  power: 4000
}]

}
