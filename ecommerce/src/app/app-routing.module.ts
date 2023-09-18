import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { ServicesComponent } from './Component/services/services.component';
import { ConstantPool } from '@angular/compiler';
import { ContactComponent } from './Component/contact/contact.component';
import { WeddingComponent } from './Component/gallery/wedding/wedding.component';
import { SportsComponent } from './Component/gallery/sports/sports.component';
import { FashionComponent } from './Component/gallery/fashion/fashion.component';
import { PortraitComponent } from './Component/gallery/portrait/portrait.component';
import { CarouselComponent } from './Component/home/carousel/carousel.component';
import { TestComponent } from './Component/test/test.component';



const routes: Routes = [
  { path: '', 
  children:[ 
    {path:"", component:HomeComponent},
    {path:'carousel', component:CarouselComponent},
   ]},

    { path: 'about',component:AboutComponent},
    { path: 'test',component:TestComponent},
    { path: 'gallery', component:GalleryComponent},
    { path: 'wedding', component: WeddingComponent },
    { path: 'sports', component: SportsComponent },
    { path: 'fashion', component: FashionComponent },
    { path: 'portrait', component: PortraitComponent },
 

  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  // You can add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
 
}
// { path: 'gallery',
//   children: [
//     {path:"", component:GalleryComponent},
//     { path: 'wedding', component: WeddingComponent },
//     { path: 'sports', component: SportsComponent },
//     { path: 'fashion', component: FashionComponent },
//     { path: 'portrait', component: PortraitComponent }
//   ]},