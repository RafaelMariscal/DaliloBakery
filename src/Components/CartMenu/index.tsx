import { AiOutlineShoppingCart, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from "./CartMenu.module.scss"

import { useEffect, useRef, useState } from "react";
import CartList from './CartList';

export default function CartMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const refOne = useRef<any>(null)
  useEffect(() => {
    const handleCloseCart = (event: Event) => {
      if (!refOne.current.contains(event.target)) {
        setIsSidebarOpen(false)
        console.log('click outside')
      } else {
        console.log('click inside')
      }
    }
    document.addEventListener("click", handleCloseCart, true)
  }, [])

  return (
    <aside className={`${styles.menuContainer} ${isSidebarOpen ? styles.cartMenuOpen : ''} `} ref={refOne} >
      <div >
        <div className={styles.header}>
          <a className={styles.cart} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <AiOutlineDoubleLeft size={15} className={styles.arrowLeft} />
            <AiOutlineShoppingCart size={25} className={styles.shopCart} />
            <AiOutlineDoubleRight size={15} className={styles.arrowRight} />
          </a>

          <h3>Order #<span>34561</span></h3>
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