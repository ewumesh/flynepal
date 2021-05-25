import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannersComponent } from './banners/banners.component';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BannerPromotionComponent } from './banner-promotion/banner-promotion.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import {MatBadgeModule} from '@angular/material/badge';

import { AppSettings } from './services/color-option.service'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    OrderByPipe,
    BannersComponent,
    ShoppingWidgetsComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    FooterTwoComponent,
    InfoBarComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    BannersComponent,
    FlexLayoutModule,
    ShoppingWidgetsComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    FooterTwoComponent,
    InfoBarComponent

  ],
  providers: [
    AppSettings,
    ProductService,
    CartService
  ]
})
export class SharedModule {}
