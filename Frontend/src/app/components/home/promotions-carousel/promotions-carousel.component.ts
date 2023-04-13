import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions-carousel',
  templateUrl: './promotions-carousel.component.html',
  styleUrls: ['./promotions-carousel.component.scss']
})
export class PromotionsCarouselComponent {
  showNavigationArrows = false;

  images = [
    {
      src: '../../assets/images/clothes.png',
      style: {backgroundColor:'#e8ebea', display:'flex', 'align-items': 'flex-end', width:'100%', height:'300px'},
      imgStyle:{height: '120px', 'margin-left': 'auto', width: '220px'},
      infoStyle:{flex: 1,'padding-bottom':'20px','margin-right':'5px', 'font-size': '30px'},
      tag: '#FASHION DAY',
      topic: '80%OFF',
      description: 'Discover fashion that suits to your style'
    },
    {
      src: '../../assets/images/lotion.png',
      style: {backgroundColor:'#eae2e2', display:'flex', 'align-items': 'flex-end', width:'100%', height:'300px'},
      imgStyle:{height: '150px', 'margin-left': 'auto', width: '170px'},
      infoStyle:{flex: 1,'padding-bottom':'20px','margin-right':'5px', 'font-size':'20px'},
      tag: '#BEAUTYSALE',
      topic: 'DISCOVER OUR BEAUTY SELECTION',
      description: ''
    },
    {
      src: '../../assets/images/chaiceness.png',
      style: {backgroundColor:'#daedd8', display:'flex', 'align-items': 'flex-end', width:'100%', height:'300px'},
      imgStyle:{height: '120px', 'margin-left': 'auto', width: '170px'},
      infoStyle:{flex: 1,'padding-bottom':'20px','margin-right':'5px', 'font-size':'20px'},
      tag: '#BEAUTYSALE',
      topic: 'DISCOVER OUR BEAUTY SELECTION',
      description: ''
    }
  ];


}
