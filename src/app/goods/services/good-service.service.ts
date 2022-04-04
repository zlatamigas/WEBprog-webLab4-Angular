import { Injectable } from '@angular/core';
import {Goods} from "./mock-good-list";
import {Good} from "./good";

@Injectable({
  providedIn: 'root'
})

export class GoodServiceService {

  static goods: Good[] = Goods;

  public getGoods(){

    return GoodServiceService.goods;
  }

  public addGood(good: Good){
    GoodServiceService.goods.push(good);
  }

  public getGoodsById(id: number){
    return GoodServiceService.goods.find(g => g.id==id);
  }
}
