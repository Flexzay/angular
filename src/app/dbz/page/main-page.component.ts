import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

public character: Character[]= [{

  name: 'krillin',
  power: 5000

},{

  name:'goku',
  power: 9500
},{
  name: 'vegeta',
  power: 7500

}];


}
