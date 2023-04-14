import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { LikeService } from 'src/app/services/like/like.service';
import { ripple } from 'src/app/animations/ripple';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [ripple]
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  liked!: boolean;

  constructor(private likeService: LikeService, private router: Router) {

  }

  ngOnInit(): void {
    this.liked = this.likeService.isLiked(this.product.id);
  }

  like(event: Event): void {
    event.stopPropagation();
    if(this.liked){
      this.likeService.unlikeProduct(this.product.id);
      this.liked = false;
    } else {
      this.likeService.likeProduct(this.product.id);
      this.liked = true;
    }
  }

  route(productId: number): void {

    setTimeout(() => {
      this.router.navigate(['/products', productId]);
    },300);
  }
}
