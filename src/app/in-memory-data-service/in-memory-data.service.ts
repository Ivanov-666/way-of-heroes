import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bike } from '../Bike';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bikes = [
      { id: 1, name: 'Pardus Robin Sport', rate: 321, img: "https://nicebike.ru/image/catalog/velosipedy/pardus/race/2022/velosipedy-race-pardus-robin-sport-105-2022-orange-white.jpg", cost: 147000, weight: 8.9 },
      { id: 2, name: 'Scott Speedster 40', rate: 310, img: "https://www.velosklad.ru/i/models/big/24742.jpg", cost: 141000, weight: 11.2},
      { id: 3, name: 'Specialized Allez Elite', rate: 300, img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/161/932/496/461/720/12/600007190959b0.jpeg", cost: 180000, weight: 8.77 },
      { id: 4, name: 'Liv EnviLiv', rate: 284, img: "https://www.alienbike.ru/upload/iblock/8d7/t4ub5a26hzoev7jqh51phomn2dah5ptr.jpg", cost: 359000, weight: 7.8 },
      { id: 5, name: 'Cube Attain SL', rate: 278, img: "https://www.velosklad.ru/i/models/big/21099.jpg", cost: 148000, weight: 9.9},
      { id: 6, name: 'Cannondale Synapse AL', rate: 267, img: "https://trial-sport.ru/images/catalog/c20_c12650m_synapse_al_disc_sora_sgg_pd_2048961.jpg", cost: 117000, weight: 8.3},
      { id: 7, name: 'Specialized Tarmac SL7 Comp', rate: 248, img: "https://www.velosaratov.ru/upload/iblock/01d/ac5yxg8mq1pzoanhj8x8tdeqkd11ehqa.jpg", cost: 756000, weight: 10.0 },
      { id: 8, name: 'Wilier GTR Team Disc', rate: 236, img: "https://d2yn9m4p3q9iyv.cloudfront.net/wilier/2020/gtr-team-disc-shimano-ultegra-8020/thumbs/1000/60ab4.jpeg", cost: 268000, weight: 8.9 },
      { id: 9, name: 'Giant TCR Advanced 2', rate: 225, img: "https://cdn.velostrana.ru/upload/models/velo/41340/full.jpg", cost: 50000, weight: 8.7},
      { id: 10, name: 'Liv Avail 1', rate: 210, img: "https://sportlim.ru/upload/iblock/4c6/l9bc91hhnnrs1mfe1sh30oivvse7o209.jpg", cost: 106000, weight: 9.6 }
    ];
    return {bikes};
  }

  genId(bikes: Bike[]): number {
    return bikes.length > 0 ? Math.max(...bikes.map(bike => bike.id)) + 1 : 1;
  }
}