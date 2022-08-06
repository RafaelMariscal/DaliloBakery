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
  totalFees: number
  totalOrder: number

  resetCart: () => void
  addItemToCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  increaseProductQuantityByOne: (id: string) => void
  decreaseProductQuantityByOne: (id: string) => void
}

export type ProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as ContextData)

const PRODUCT_MAX_QUANTITY = 6

export const FEES = 6.95 //in percentage

export function CartProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>([])

  function checkHasProductInCart(id: string) {
    const product = cart.find((item) => item.productId === id)
    return product
  }

  function increaseProductQuantityByOne(id: string) {
    const updatedCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity === PRODUCT_MAX_QUANTITY) {
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
      return increaseProductQuantityByOne(id)
    }

    const productPrice = BakeryProducts.find((product) => product.id === id)?.price

    setCart((prev) => [
      ...prev,
      {
        id: `item-${id}`,
        quantity: 1,
        productId: id,
        unityPrice: productPrice ?? 0,
        totalPrice: productPrice ?? 0,
      },
    ])
  }

  function removeItemFromCart(id: string) {
    const updatedCart = cart.filter((item) => (item.productId !== id))
    setCart(updatedCart)
  }

  function decreaseProductQuantityByOne(id: string) {
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

  const totalFees = subTotal * (FEES / 100)

  const totalOrder = subTotal + totalFees

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        totalFees,
        totalOrder,
        resetCart,
        addItemToCart,
        removeItemFromCart,
        increaseProductQuantityByOne,
        decreaseProductQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}