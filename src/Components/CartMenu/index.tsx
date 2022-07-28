import { AiOutlineShoppingCart, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from "./CartMenu.module.scss"

import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import CartList from './CartList';

export default function CartMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeDropdown = () => {
    setIsSidebarOpen(false);
  }
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <aside className={`${styles.menuContainer} ${isSidebarOpen ? styles.cartMenuOpen : ''} `} ref={ref}>
      <div >
        <div className={styles.header}>
          <a className={styles.chart} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
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