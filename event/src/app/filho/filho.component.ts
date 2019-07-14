import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia);
    console.log('Objeto Familia recebido via input: ', this.recebeFamilia);
  }

  feedback() {
    console.log('Resposta para o componente pai', this.respostaFamilia.emit(
      { nome: 'Raimundo', sobrenome: 'nonato' }
    ));
  }

}
