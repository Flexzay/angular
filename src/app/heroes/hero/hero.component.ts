import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


    public name: string = 'Superman';
    public age: number = 30;

    get capitalizeName(): string {
        return this.name.toUpperCase();
    }

    getHeroDescription(): string {
     return `Mi nombre es ${this.name} y tengo ${this.age} años.`;
    }

    changrName(): string {
      return this.name = 'Batman';
    }
    changeAge(): number {
       return this.age = 40;
    }

    resetValues(): void {
      this.name = 'Superman';
      this.age = 30;
    }
}
