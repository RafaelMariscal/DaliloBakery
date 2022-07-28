import { useMemo, useState, useContext, createContext, ReactNode } from 'react'
import { BakeryProducts } from '../../src/Assets/bakery'

export type ICartItem = {
  id: string
  productId: string
  quantity: number
  unityPrice: number
  totalPrice: number
}

type ContextData = {
  cart: ICartItem[]
  subTotal: number
  totalOrder: number

  resetCart: () => void
  addItemToCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  increaseCoffeeQuantityByOne: (id: string) => void
  decreaseCoffeeQuantityByOne: (id: string) => void
}

export type ProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as ContextData)

export const FEES = 3.95

export function CartProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>([])

  function checkHasProductInCart(id: string) {
    const product = cart.find((item) => item.productId === id)
    return product
  }

  function increaseCoffeeQuantityByOne(id: string) {
    const updatedCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity === 5) {
          return product
        }

        const quantity = product.quantity + 1
        const totalPrice = product.unityPrice * quantity
        return {
          ...product,
          quantity,
          totalPrice,
        }
      }

      return product
    })

    setCart(updatedCart)
  }

  function addItemToCart(id: string) {
    const product = checkHasProductInCart(id)
    if (product) {
      return increaseCoffeeQuantityByOne(id)
    }

    const productPrice = BakeryProducts.find((product) => product.id === id)?.price

    setCart((prev) => [
      ...prev,
      {
        id: `item-${id}-${Date.now()}`,
        quantity: 1,
        productId: id,
        unityPrice: productPrice ?? 0,
        totalPrice: productPrice ?? 0,
      },
    ])
  }

  function removeItemFromCart(id: string) {
    const updatedCart = cart.filter((item) => item.id !== id)

    setCart(updatedCart)
  }

  function decreaseCoffeeQuantityByOne(id: string) {
    const updatedCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity === 1) {
          return product
        }

        const quantity = product.quantity - 1
        const totalPrice = product.unityPrice * quantity

        return {
          ...product,
          quantity,
          totalPrice,
        }
      }

      return product
    })

    setCart(updatedCart)
  }

  function resetCart() {
    setCart([])
  }

  const subTotal = useMemo(() => {
    const value = cart.reduce((acc, curr) => {
      const temp = acc + curr.totalPrice
      return temp
    }, 0)

    return value
  }, [cart])

  const totalOrder = subTotal + FEES

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        totalOrder,
        resetCart,
        addItemToCart,
        removeItemFromCart,
        increaseCoffeeQuantityByOne,
        decreaseCoffeeQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}