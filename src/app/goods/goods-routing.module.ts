import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { GoodDetailsComponent} from "./good-details/good-details.component";
import { GoodServiceService } from "./services/good-service.service";
import {GoodFormComponent} from "./good-form/good-form.component";
import {GoodCenterComponent} from "./good-center/good-center.component";

const routes: Routes = [
  {path: 'good-details-component/:id', component: GoodDetailsComponent},
  {path: 'good-form-component', component: GoodFormComponent},
  {path: '', component: GoodCenterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [GoodServiceService]
})
export class GoodsRoutingModule { }

