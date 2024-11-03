import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { Router, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';
import { CustomSearchPipe } from '../../core/pipe/custom-search.pipe';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../core/services/categories.service';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    LoaderComponent,
    CustomSearchPipe,
    FormsModule,
    MainCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _productsService = inject(ProductsService);
  private readonly _navRouter = inject(Router);
  private readonly _categoryService = inject(CategoriesService);
  productsList: Product[] = [];
  categoriesList: string[] = [];
  searchText: string = '';
  searchKey: string = 'title';

  isLoading = true;

  getAllCategories() {
    this._categoryService.getAllCategories().subscribe({
      next: (res: any) => {
        this.categoriesList = res;
        console.log(this.categoriesList);
        this.isLoading = false;
      },
    });
  }

  displayCategoryProducts(name: string) {
    this._navRouter.navigate(['/category-products', name]);
  }

  getAllProducts() {
    this._productsService.getAllProducts().subscribe({
      next: (res) => {
        this.productsList = res;
        console.log(this.productsList);
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }
}
