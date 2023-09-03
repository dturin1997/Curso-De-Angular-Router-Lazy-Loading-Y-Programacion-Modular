import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'src/app/website/components/layout/layout.component';

import { HomeComponent } from 'src/app/website/pages/home/home.component';
import { NotFoundComponent } from 'src/app/website/pages/not-found/not-found.component';
import { CategoryComponent } from 'src/app/website/pages/category/category.component';
import { MyCartComponent } from 'src/app/website/pages/mycart/mycart.component';
import { LoginComponent } from 'src/app/website/pages/login/login.component';
import { RegisterComponent } from 'src/app/website/pages/register/register.component';
import { RecoveryComponent } from 'src/app/website/pages/recovery/recovery.component';
import { ProfileComponent } from 'src/app/website/pages/profile/profile.component';
import { ProductDetailComponent } from 'src/app/website/pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'category/:id',
        component: CategoryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'my-cart',
        component: MyCartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
