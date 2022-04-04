import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoodCenterComponent} from './good-center/good-center.component';
import {GoodListComponent} from './good-list/good-list.component';
import {GoodDetailsComponent} from './good-details/good-details.component';
import {GoodsRoutingModule} from './goods-routing.module';
import {GoodFormComponent} from './good-form/good-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    GoodCenterComponent,
    GoodListComponent,
    GoodDetailsComponent,
    GoodFormComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule
  ]
})
export class GoodsModule {
}
