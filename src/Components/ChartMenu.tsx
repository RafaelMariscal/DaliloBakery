import { AiOutlineShoppingCart, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from "./ChartMenu.module.scss"


import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function ChartMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const closeDropdown = () => {
    setIsSidebarOpen(false);
  }
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <aside className={`${styles.menuContainer} ${isSidebarOpen ? styles.cartMenuOpen : ''} `} ref={ref}>
      <div>
        <a onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <AiOutlineDoubleLeft size={15} className={styles.arrowLeft} />
          <AiOutlineShoppingCart size={25} className={styles.shopCart} />
          <AiOutlineDoubleRight size={15} className={styles.arrowRight} />
        </a>
      </div>
    </aside>
  )
}