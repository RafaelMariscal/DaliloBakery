import ChartMenu from "../../Components/ChartMenu"
import Header from "../../Components/Header"
import Menu from "../../Components/Menu"

import styles from "./Home.module.scss"

export function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Menu />
        <Header />
      </div>
      <ChartMenu />
    </div>
  )
}