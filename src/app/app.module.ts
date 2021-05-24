import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestViewComponent } from './components/test-view/test-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductCardComponent } from './components/product-card/product-card.component';
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
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
