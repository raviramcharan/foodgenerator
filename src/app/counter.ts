import { Component } from '@angular/core';
import { bootstrap } from 'angular2/platform/browser';


@Component({
    selector: 'app',
    template: `
    
    <button (click)="decrement()">-</button>
    {{counter}} 
    <button (click)="increment()">+</button>
    <div></div>
       
`
})
export class App {
    public counter : number = 0;

    
    increment(){
      if (this.counter < 10) this.counter += 1;
    }

    decrement(){
      if (this.counter > 0) this.counter -= 1;
    }
}

// bootstrap(App, []);