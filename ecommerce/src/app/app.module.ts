import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { ServicesComponent } from './Component/services/services.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './Component/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeddingComponent } from './Component/gallery/wedding/wedding.component';
import { SportsComponent } from './Component/gallery/sports/sports.component';
import { FashionComponent } from './Component/gallery/fashion/fashion.component';
import { PortraitComponent } from './Component/gallery/portrait/portrait.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { CarouselComponent } from './Component/home/carousel/carousel.component';
import { TestComponent } from './Component/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServicesComponent,
    
    ContactComponent,
    WeddingComponent,
    SportsComponent,
    FashionComponent,
    PortraitComponent,
    CarouselComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
