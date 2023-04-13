import { Component, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  liked : boolean = false;

  like(event: Event): void {
    event.stopPropagation();
    this.liked = this.liked? false : true;
  }
}
