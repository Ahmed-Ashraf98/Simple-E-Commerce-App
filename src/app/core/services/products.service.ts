import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../env/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);

  getAllProducts(): Observable<any> {
    return this._httpClient.get(`${baseUrl}products`);
  }

  getProductById(id: number): Observable<any> {
    return this._httpClient.get(`${baseUrl}products/${id}`);
  }

  getAllProductsByCategory(categoryName: string) {
    return this._httpClient.get(`${baseUrl}products/category/${categoryName}`);
  }
}
