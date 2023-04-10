import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { MiddleMenuComponent } from './components/middle-menu/middle-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PromotionsCarouselComponent } from './components/promotions-carousel/promotions-carousel.component';
import { BestSaleProductComponent } from './components/best-sale-product/best-sale-product.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomMenuComponent,
    MiddleMenuComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    PromotionsCarouselComponent,
    BestSaleProductComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
