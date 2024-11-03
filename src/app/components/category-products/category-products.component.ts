import { Component, inject, Input, OnInit } from '@angular/core';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [LoaderComponent, ProductCardComponent],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss',
})
export class CategoryProductsComponent implements OnInit {
  isLoading: boolean = true;
  private readonly _productsService = inject(ProductsService);
  @Input() name!: string;

  productsList: Product[] = [];

  getProductsOfCategoryName() {
    this._productsService.getAllProductsByCategory(this.name).subscribe({
      next: (res: any) => {
        this.productsList = res;
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.getProductsOfCategoryName();
  }
}
