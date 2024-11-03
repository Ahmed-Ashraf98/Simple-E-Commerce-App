import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/environment.prod';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _httpClient = inject(HttpClient);

  getAllCarts(): Observable<any> {
    return this._httpClient.get(`${baseUrl}carts`);
  }

  getCartById(id: number): Observable<any> {
    return this._httpClient.get(`${baseUrl}carts/${id}`);
  }

  /**
   @param uid : The user id
   @returns : Observable<any>
   @summary : This function returns all carts for specific user
  */
  getUserCarts(uid: number): Observable<any> {
    return this._httpClient.get(`${baseUrl}carts/user/${uid}`);
  }

  // addProductToCart(prodObj: Product): Observable<any> {
  //   return this._httpClient.post(`${baseUrl}/carts`, prodObj);
  // }
}
