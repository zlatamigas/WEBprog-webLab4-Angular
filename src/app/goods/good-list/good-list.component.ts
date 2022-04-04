import { Component, OnInit } from '@angular/core';
import { Goods } from "../services/mock-good-list";
import { Good } from "../services/good";

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {

  goods: Good[] = [];

  constructor() { }

  ngOnInit(): void {
    this.goods = Goods;
  }

}
