import { AiOutlineShoppingCart, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from "./CartMenu.module.scss"

import { useEffect, useRef, useState } from "react";
import CartList from './CartList';
import { useCart } from '../../hooks/useCart';

export default function CartMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [orderNumber, setOrderNumber] = useState(0)

  const { cart } = useCart()

  const refOne = useRef<any>(null)
  useEffect(() => {
    const handleCloseCart = (event: Event) => {
      if (!refOne.current.contains(event.target)) {
        setIsSidebarOpen(false)
      } else {
        return
      }
    }
    document.addEventListener("click", handleCloseCart, true)

    setOrderNumber(34560 + Math.floor(Math.random() * 10))
  }, [])

  return (
    <aside className={`${styles.menuContainer} ${isSidebarOpen ? styles.cartMenuOpen : ''} `} ref={refOne} >
      <div >
        <div className={styles.header}>
          <a
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title={isSidebarOpen ? undefined : cart.length ? String(cart.length) : undefined}
            className={`${styles.cart} ${!isSidebarOpen && styles.cartClosed}`}
          >
            <AiOutlineDoubleLeft size={15} className={styles.arrowLeft} />
            <AiOutlineShoppingCart size={25} className={styles.shopCart} />
            <AiOutlineDoubleRight size={15} className={styles.arrowRight} />
          </a>

          <h3>Order #<span>{orderNumber}</span></h3>
        </div>

        <div className={styles.orderType}>
          <span className={styles.orderTypeSelected}>delivery</span>
          <span >to go</span>
        </div>

        <CartList isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  )
}