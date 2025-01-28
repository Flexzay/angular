import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
  <h1>{{titulo}}</h1>
  <h3>{{contenido}}</h3>
  <h3>Contador: {{conteo}}</h3>
  <button (click)="incrementar()">+1</button>
  <button (click)="decrementar()">-1</button>
  <button (click)="resetear()">Reset</button>



  `
})

export class CounterComponent {
  titulo: string = 'hola este la variable titulo del componente counter';
  contenido: string = 'Este es un contador que se incrementa y decrementa en 1'
  conteo: number = 0; // variable que se incrementa o decrementa, se inicializa en 0


  public incrementar() {
    this.conteo++;
  }
  public decrementar() {
    this.conteo--;
    if (this.conteo < 0) {
      this.conteo = 0;}

  }

  public resetear(){
    this.conteo = 0;
  }


}
