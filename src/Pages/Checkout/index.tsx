import { useCart } from "../../hooks/useCart"
import { AiFillShopping, AiFillCompass } from 'react-icons/ai'

import LogoDalilo from "../../Assets/LogoDalilo.svg";
import Komb from "../../Assets/komb.svg"
import Mountains from "../../Assets/Mountains.svg"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";
import CartList from '../../Components/CartMenu/CartList';
import AddressForm from "../../Components/CheckoutPage/AddressForm";

export function Checkout() {
  const { orderNumber } = useCart()

  return (
    <div className={styles.container}>
      <img src={Mountains} alt="mountains" />
      <img src={Komb} alt="komb" />
      <header className={styles.checkoutHeader}>
        <div>
          <div>
            <Link to={'/'}>
              <img src={LogoDalilo} alt="" />

              <div>
                <h1>Checkout</h1>
                <p>Confirme as informações do seu pedido!</p>
              </div>
            </Link>
          </div>

          <Link to={'/'} className={styles.linkToHome}>
            Return to Shop
            <AiFillShopping size={24} />
          </Link>
        </div>
      </header>

      <div className={styles.formsContainer}>

        <AddressForm />

        <div className={styles.oderCard}>
          <header>
            <AiFillCompass size={20} />
            <div>
              <h2>Resumo do pedido #{orderNumber}</h2>
            </div>
          </header>
          <CartList isSidebarOpen={true} isCheckoutPage />
        </div>
      </div>
    </div>
  )
}