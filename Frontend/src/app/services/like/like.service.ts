import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  public likedProducts: number[] =[];

  constructor() { }

  likeProduct(productId: number): void {
    if(!this.likedProducts.includes(productId)) this.likedProducts.push(productId);
  }

  unlikeProduct(productId: number): void {
    if(this.likedProducts.includes(productId)){
      let index = this.likedProducts.indexOf(productId);
      this.likedProducts.splice(index,1);
    }
  }

  isLiked(productId: number): boolean {
    return this.likedProducts.includes(productId);
  }
}
