import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from 'src/app/website/components/img/img.component';
import { ProductComponent } from 'src/app/website/components/product/product.component';
import { ProductsComponent } from 'src/app/website/components/products/products.component';
import { NavComponent } from 'src/app/website/components/nav/nav.component';
import { ReversePipe } from 'src/app/website/pipes/reverse.pipe';
import { TimeAgoPipe } from 'src/app/website/pipes/time-ago.pipe';
import { HighlightDirective } from 'src/app/website/directives/highlight.directive';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from 'src/app/website/pages/home/home.component';
import { NotFoundComponent } from 'src/app/website/pages/not-found/not-found.component';
import { CategoryComponent } from 'src/app/website/pages/category/category.component';
import { MyCartComponent } from 'src/app/website/pages/mycart/mycart.component';
import { LoginComponent } from 'src/app/website/pages/login/login.component';
import { RegisterComponent } from 'src/app/website/pages/register/register.component';
import { RecoveryComponent } from 'src/app/website/pages/recovery/recovery.component';
import { ProfileComponent } from 'src/app/website/pages/profile/profile.component';
import { ProductDetailComponent } from 'src/app/website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
