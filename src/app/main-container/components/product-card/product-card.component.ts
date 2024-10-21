import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Products } from '@app/models';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  readonly store = inject(GlobalStore)
  product = input.required<Products>();
  truncate(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }

  addProductToCart(product: Products) {
    this.store.addToCart(product).then(
      () => {
        console.log('product add to cart', product)
      }
    ).catch(error => {
      console.error('Errrror', error);
    })
  }


}
