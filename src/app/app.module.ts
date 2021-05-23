import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TestViewComponent } from './components/test-view/test-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { ProductSmListCardComponent } from './components/product-sm-list-card/product-sm-list-card.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    ProductCardComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
    CartPreviewComponent,
    ProductSmListCardComponent,
    CatalogPageComponent,
    AboutPageComponent,
    FaqPageComponent,
    ProductPageComponent,
    ContactPageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
