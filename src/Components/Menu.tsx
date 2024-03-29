import { GrInstagram } from "react-icons/gr"
import { useCallback, useState } from 'react'

import styles from "./Menu.module.scss"
import { Category } from "../Assets/bakery"
import LogoDalilo from "../Assets/LogoDalilo.svg";

interface MenuType {
  menu: string
  category: Category[]
}

interface MenuProps {
  categoryFilter: (categories: Category[]) => void
}

const menuList: MenuType[] = [
  {
    menu: "Home",
    category: ["all"]
  },
  {
    menu: "Pães Salgados",
    category: ["salty"]
  },
  {
    menu: "Pães Doces",
    category: ["sweet"]
  },
  {
    menu: "Dalilinhos Delícia",
    category: ["tiny"]
  },
  {
    menu: "Dalilo Vengano",
    category: ["vegan"]
  },
  {
    menu: "Dalilo Lacfree",
    category: ["lacfree"]
  },
]
export default function Menu({ categoryFilter }: MenuProps) {
  const [menuActive, setMenuActive] = useState('Home')

  const handleMenu = useCallback((event: any) => {
    const menuNameSelected = String(event.target.innerHTML).replace('<br>', ' ')
    console.log(menuNameSelected)
    if (menuNameSelected !== menuActive) {
      setMenuActive(menuNameSelected)
    }
    const menuSelected = menuList.find(menu => menu.menu === menuNameSelected)
    if (menuSelected) {
      return categoryFilter(menuSelected?.category)
    }
    return
  }, [menuActive])

  return (
    <aside className={styles.menuContainer}>
      <img src={LogoDalilo} alt="" />
      <nav>
        <ul>
          {menuList.map(item => {
            const isMenuActive = item.menu === menuActive

            const itemToCheck = item.menu.split(' ')
            if (itemToCheck.length > 1) {
              return (
                <li
                  key={itemToCheck[0] + itemToCheck[1]}
                  className={isMenuActive ? styles.active : ''}
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
                  className={isMenuActive ? styles.active : ''}
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