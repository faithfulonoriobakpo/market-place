import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProductDetailsComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  product!: Product;
  products!: Product[];
  id!: number;
  liked!: boolean;
  selectedProductImage!: string;
  fadeInAnimation = 'void';
  animationTriggered: boolean = false;
  aboutActive: boolean = true;
  productDescription!: string[];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService
      .getAllProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res) => {
          this.products = res;
          this.product = this.products?.filter((item) => item.id === this.id)[0];
          this.selectedProductImage = this.product.images[0].main;
          this.productDescription = this.product.description.split('.');
          this.productDescription.pop();
        },
        error: (err) => console.log(err),
      });
  }

  selectImage(image: string){
    this.animationTriggered = true;
    this.fadeInAnimation = 'void';
    setTimeout(() => {
      this.selectedProductImage = image;
      this.fadeInAnimation = 'fadeIn';
    }, 250);
  }

  aboutOrReview():void{
    this.aboutActive = this.aboutActive? false : true;
  }
}
