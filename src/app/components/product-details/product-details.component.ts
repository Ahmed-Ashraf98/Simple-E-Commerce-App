import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly product_serv = inject(ProductsService);

  // To fetch the id from the route information
  @Input() id!: number;
  isLoading: boolean = true;
  product!: Product;

  getProductDetails() {
    this.product_serv.getProductById(this.id).subscribe({
      next: (res: Product) => {
        this.product = res;
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.getProductDetails();
  }
}
