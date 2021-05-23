import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [ 
  {path: '', component: HomePageComponent },
  {path: 'catalogo', component: CatalogPageComponent },
  {path: 'about', component: AboutPageComponent },
  {path: 'faq', component: FaqPageComponent },
  {path: 'product', component: ProductPageComponent },
  {path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
