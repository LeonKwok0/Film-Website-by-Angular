import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { SmcarouselComponent } from './components/smcarousel/smcarousel.component';
import { DetailComponent } from './components/detail/detail.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    MylistComponent,
    SmcarouselComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})




export class AppModule { }
