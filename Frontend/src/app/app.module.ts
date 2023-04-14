import { NgModule } from '@angular/core';
import { BrowserModule,HammerModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomMenuComponent } from './components/home/bottom-menu/bottom-menu.component';
import { MiddleMenuComponent } from './components/home/middle-menu/middle-menu.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PromotionsCarouselComponent } from './components/home/promotions-carousel/promotions-carousel.component';
import { BestSaleProductComponent } from './components/home/best-sale-product/best-sale-product.component';
import { RecommendationComponent } from './components/product-details/recommendation/recommendation.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowScrollDirective } from './directives/window-scroll/window-scroll.directive';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';

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
    HomeComponent,
    WindowScrollDirective,
    ShoppingBasketComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
