import { inject, InjectionToken } from "@angular/core"
import { Products } from "@app/models"
import { StoreService, } from "@app/services"
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals'
import { withEntities } from '@ngrx/signals/entities'
import { lastValueFrom } from "rxjs"

type StoreState = {
  products: Products[];
  cart: Products[];
}

const initialState: StoreState = {
  products: [],
  cart: []
}

const STORE_STATE = new InjectionToken<StoreState>('GlobalStore', {
  factory: () => initialState
})

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<Products>(),
  withMethods((store, storeService = inject(StoreService)) => ({
    getProducts(id: number) {
      return store.products().find((prod: Products) => prod.id === id)
    },
    async addToCart(product: Products) {
      try {
        await lastValueFrom(storeService.addToCart(product));
        patchState(store, ({ cart }) => ({
          cart: [
            ...cart,
            product
          ]
        }))
      } catch (err) { }
    },
    getCart() {
      return store.cart()
    }

  })
  ),


  withHooks({
    async onInit(store, storeService = inject(StoreService)) {
      const products = await lastValueFrom(storeService.getAllProducts(),);
      patchState(store, { products })
    }
  })
)
