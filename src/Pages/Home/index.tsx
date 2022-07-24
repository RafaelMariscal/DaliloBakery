import ChartMenu from "../../Components/ChartMenu"
import Header from "../../Components/Header"
import Menu from "../../Components/Menu"
import ProductCard from "../../Components/ProductCard"
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Home.module.scss"

export function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.content}>
        <Header />
        <h2>
          <GiSlicedBread size={24} />
          Nossos Produtos:
        </h2>
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>
      <ChartMenu />
    </div>
  )
}