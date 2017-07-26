import { Component, OnInit } from '@angular/core';
import {CounterService} from '../../services/counter.service';

@Component({
  selector: 'app-alberto-contador',
  templateUrl: './alberto-contador.component.html',
  styleUrls: ['./alberto-contador.component.css'],
})
export class AlbertoContadorComponent implements OnInit {

  constructor(public servicio:CounterService) { }

  ngOnInit() {
  }

  dateUnChute(){
      this.servicio.increment();
  }

}
