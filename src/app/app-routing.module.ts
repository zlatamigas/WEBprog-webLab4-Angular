import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { GoodCenterComponent} from "./goods/good-center/good-center.component";

const routes: Routes = [
  {path: '', component: GoodCenterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
