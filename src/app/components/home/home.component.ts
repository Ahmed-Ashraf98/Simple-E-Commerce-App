import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly products_serv = inject(ProductsService);
  private readonly _navRouter = inject(Router);

  productsList: Product[] = [];
  categoriesList: string[] = [];

  isLoading = true;

  getAllProducts() {
    this.products_serv.getAllProducts().subscribe({
      next: (res) => {
        this.productsList = res;
        console.log(this.productsList);
        this.isLoading = false;
      },
    });
  }

  displayProductDetails(id: number) {
    // console.log(`Going to view product id ${id}`);
    this._navRouter.navigate(['/product-details', id]);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
