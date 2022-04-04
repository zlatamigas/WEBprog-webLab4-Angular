import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GoodServiceService } from "../services/good-service.service";
import { Good} from "../services/good";

@Component({
  selector: 'app-good-details',
  templateUrl: './good-details.component.html',
  styleUrls: ['./good-details.component.css']
})

export class GoodDetailsComponent {

  good!: Good;

  constructor(private activatedRoute:ActivatedRoute,
              private goodsService: GoodServiceService) {
  }

  ngOnInit(): void {
    let id: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(id);
    this.good = this.goodsService.getGoodsById(id)!;

  }
}
