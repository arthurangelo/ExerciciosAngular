import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  stockValueChanged() {
    this.stockValueChange.emit(
      { id: this.productId, updatstockvalue: this.updatedstockvalue }
    );
    this.updatedstockvalue = null;
  }

  getColor() {
    if (this.stock > 10) {
      return'green';
    } else {
      return 'red';
    }
  }

}
