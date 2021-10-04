import { ShoesWomanComponent } from './shoes-woman/shoes-woman.component';
import { PullComponent } from './pull/pull.component';
import { BagComponent } from './bag/bag.component';
import { SporthingsWearComponent } from './sporthings-wear/sporthings-wear.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HeaderComponent } from "./header/header.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    children: [

      {
        path:"",component:AcceuilComponent
      },
      {
        path:"shoes", component:ShoesComponent
      },
      {
        path:"clothing",component:ClothingComponent
      },
      {
        path:"sport", component:SporthingsWearComponent
      },
      {
        path:"bag", component:BagComponent
      },
      {
        path:"pull", component:PullComponent
      },
      {
        path:"woman_shoes", component:ShoesWomanComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
