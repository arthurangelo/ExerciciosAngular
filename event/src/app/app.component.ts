import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  produtos: any;
  productToUpdate: any;

  ngOnInit() {
    this.produtos = this.getProdutos();
  }

  getProdutos() {
    return [
      { id: 1, nome: 'Camisa', preco: 400, stoque: 2 },
      { id: 2, nome: 'Calca', preco: 600, stoque: 25 },
      { id: 3, nome: 'Bone', preco: 250, stoque: 30 },
      { id: 4, nome: 'Tenis', preco: 1000, stoque: 15 }
    ];
  }


  changeStockValue(p) {
    console.log(p);
    this.productToUpdate = this.findProdutos(p);
    console.log(this.productToUpdate);
    this.productToUpdate.stoque = this.productToUpdate.stoque + p.updatstockvalue;
  }

  findProdutos(p) {
    return this.produtos.find(produto => produto.id === p.id);
  }
}
