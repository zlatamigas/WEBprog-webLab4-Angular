import {Component, OnInit} from '@angular/core';
import {Good} from "../services/good";
import {ActivatedRoute} from "@angular/router";
import {GoodServiceService} from "../services/good-service.service";

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {

  goods: Good[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private goodsService: GoodServiceService) {
  }

  ngOnInit(): void {
    this.goods = this.goodsService.getGoods();
  }

}
