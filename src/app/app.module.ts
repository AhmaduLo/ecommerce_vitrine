import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ClothingComponent } from './clothing/clothing.component';
import { InfoArticleComponent } from './info-article/info-article.component';
import { SporthingsWearComponent } from './sporthings-wear/sporthings-wear.component';
import { BagComponent } from './bag/bag.component';
import { PullComponent } from './pull/pull.component';
import { ShoesWomanComponent } from './shoes-woman/shoes-woman.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    ShoesComponent,
    ClothingComponent,
    InfoArticleComponent,
    SporthingsWearComponent,
    BagComponent,
    PullComponent,
    ShoesWomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
