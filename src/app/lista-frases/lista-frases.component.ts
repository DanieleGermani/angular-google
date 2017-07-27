import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-frases',
  templateUrl: './lista-frases.component.html',
  styleUrls: ['./lista-frases.component.css']
})
export class ListaFrasesComponent implements OnInit {
  frases: Array<any>;
  paramsID: any = {};
  constructor(private router: ActivatedRoute) {
    this.frases = [
      { frase: "Hola" },
      { frase: "Hola que pasa" },
      { frase: "Has visto a marc" },
      { frase: "Yo voy a pelo" },
      { frase: "¿Esto es como un middleware?" }
    ];
    console.log("El componente se ha construido");
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.paramsID.elid = params.id;
      console.log(`El parametro es ${params.id}`);
    });
  }

  fraseEliminada(e: any) {
    console.log("No, Luke, yo soy tu padre");
    console.log(e);
    this.frases = this.frases.filter(f => f.frase != e.frase);
  }
}
