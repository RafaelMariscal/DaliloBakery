import { GrInstagram } from "react-icons/gr"
import styles from "./Menu.module.scss"
import { useState } from 'react'

export default function Menu() {

  const menuList = [
    "Home",
    "Pães Salgados",
    "Pães Doces",
    "Dalilinhos Delícia",
    "Dalilo Vengano",
    "Dalilo Lacfree"
  ]

  const [menuActive, setMenuActive] = useState('Home')

  function handleMenu(event) {
    const dataToCheck = String(event.target.innerHTML).replace('<br>', ' ')
    if (dataToCheck !== menuActive) {
      setMenuActive(dataToCheck)
    }
    return
  }

  return (
    <aside className={styles.menuContainer}>
      <img src="./assets/LogoDalilo.svg" alt="" />
      <nav>
        <ul>
          {menuList.map(item => {
            const test = item === menuActive
            const itemToCheck = item.split(' ')
            if (itemToCheck.length > 1) {
              return (
                <li
                  key={itemToCheck[0] + itemToCheck[1]}
                  className={test ? styles.active : ''}
                >
                  <a onClick={handleMenu} tabIndex={1}>
                    {itemToCheck[0]}<br />{itemToCheck[1]}
                  </a>
                </li>
              )
            } else {
              return (
                <li
                  key={itemToCheck[0]}
                  className={test ? styles.active : ''}
                >
                  <a onClick={handleMenu} tabIndex={1}>
                    {itemToCheck[0]}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </nav>
      <a href="https://www.instagram.com/forninhodalilo/" target={"_blank"}>
        <GrInstagram size={30} />
        <span>@forninhodalilo</span>
      </a>

    </aside >
  )
}