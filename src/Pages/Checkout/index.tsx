import { BakeryProducts, BakeryProductType } from "../../Assets/bakery"
import { useCart } from "../../hooks/useCart"
import { AiFillShopping } from 'react-icons/ai'

import LogoDalilo from "../../Assets/LogoDalilo.svg";
import Komb from "../../Assets/komb.svg"
import Mountains from "../../Assets/Mountains.svg"
import styles from "./styles.module.scss"

export function Checkout() {
  const { cart } = useCart()

  const ProductsInCart: BakeryProductType[] = []
  cart.map(cartProduct => {
    const productToBeListed = BakeryProducts.find(stockProduct => stockProduct.id === cartProduct.productId)
    return productToBeListed && ProductsInCart.push(productToBeListed)
  })

  return (
    <div className={styles.container}>
      <img src={Mountains} alt="mountains" />
      <img src={Komb} alt="komb" />
      <header className={styles.checkoutHeader}>
        <div>
          <img src={LogoDalilo} alt="" />

          <div>
            <h1>Checkout</h1>
            <p>Confirme seu pedido!</p>
          </div>
        </div>

        <AiFillShopping size={24} />
      </header>

      <h1 className={styles.title}>checkout...</h1>



      <ul>
        {
          ProductsInCart.map(product => {
            return (
              <h2>{product.name}</h2>
            )
          })
        }
      </ul>
    </div>
  )
}