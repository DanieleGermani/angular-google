import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    private count: number = 0;
    constructor() { }

    getCounter(){
      return this.count;
    }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}
