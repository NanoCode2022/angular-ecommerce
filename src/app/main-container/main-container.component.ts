import { ChangeDetectionStrategy, Component, computed, inject, } from '@angular/core';
import { GlobalStore } from '@app/store';
import { ProductCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  cart = computed(() => this.store.cart())
  readonly store = inject(GlobalStore)


}
