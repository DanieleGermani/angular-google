import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {
  @Input() frase:Object;
  @Output() onDelete = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  onQuoteDeleteAction () {
    this.onDelete.emit(this.frase);
  }
}
