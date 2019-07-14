import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css']
})
export class PaiComponentComponent implements OnInit {

  familia: any;

  constructor() {
    this.familia = [
      {
        nome: 'Arthur',
        sobrenome: 'Carvalho'
      }, {
        nome: 'Jose',
        sobrenome: 'Alves'
      }
    ];

  }

  ngOnInit() {
  }

  receberFeedBack(respostaFilho) {
    console.log('Foi emitido o evento pelo filho -> ', respostaFilho);
    this.familia.push(respostaFilho);

  }

}
