import { Component, inject, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly _navRouter = inject(Router);
  @Input() product!: Product;

  displayProductDetails(id: number) {
    // console.log(`Going to view product id ${id}`);
    this._navRouter.navigate(['/product-details', id]);
  }
}
