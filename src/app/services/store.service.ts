import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '@app/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private cart = new BehaviorSubject<Products[]>([])
  private readonly BaseUrl = 'https://fakestoreapi.com'
  private http = inject(HttpClient)

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.BaseUrl + '/products')
  }

  addToCart(product: Products): Observable<any> {
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, product]);
    return of(true)
  }

}
