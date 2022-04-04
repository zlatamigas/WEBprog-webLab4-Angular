import {Component, OnInit} from '@angular/core';
import {Good} from "../services/good";
import {GoodServiceService} from "../services/good-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-good-form',
  templateUrl: './good-form.component.html',
  styleUrls: ['./good-form.component.css']
})
export class GoodFormComponent implements OnInit {

  model = new Good('', 0, '');
  submitted = false;


  constructor(private activatedRoute: ActivatedRoute,
              private goodsService: GoodServiceService) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
  }

  onAddGood() {
    this.goodsService.addGood(this.model);
    this.model = new Good('', 0, '')
    this.submitted = false;
  }
}
