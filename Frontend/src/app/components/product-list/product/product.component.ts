import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { LikeService } from 'src/app/services/like/like.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  liked!: boolean;

  constructor(private likeService: LikeService) {

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
}
