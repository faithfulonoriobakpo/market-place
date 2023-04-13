import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-best-sale-product',
  templateUrl: './best-sale-product.component.html',
  styleUrls: ['./best-sale-product.component.scss']
})
export class BestSaleProductComponent implements OnInit {
  name: string = "Best Sale Product"
  bestSaleProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => this.bestSaleProducts = products);
  }
}
