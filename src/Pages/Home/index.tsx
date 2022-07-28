import { BakeryProducts, BakeryProductType, Category } from "../../../src/Assets/bakery";

import CartMenu from "../../Components/CartMenu"
import Header from "../../Components/Header"
import Menu from "../../Components/Menu"
import ProductCard from "../../Components/ProductCard"
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Home.module.scss"
import { useState } from "react";


export function Home() {
  const [productList, setProductList] = useState(BakeryProducts)

  function handleProductsCategory(categories: Category[]) {
    const filteredProductList: BakeryProductType[] = []
    if (categories.includes('all')) {
      return setProductList(BakeryProducts)
    }
    categories.map(category => {
      BakeryProducts.map(product => {
        product.categories
        if (product.categories.includes(category)) {
          filteredProductList.push(product)
        }
      })
    })
    console.log(filteredProductList)
    return setProductList(filteredProductList)
  }

  return (
    <div className={styles.container}>

      <Menu categoryFilter={handleProductsCategory} />

      <div className={styles.content}>
        <Header />

        <h2>
          <GiSlicedBread size={24} />
          Nossos Produtos:
        </h2>

        <div>
          <div className={styles.products}>
            {productList.map(product =>
              <ProductCard {...product} productListOrder={productList.indexOf(product)} key={product.id + Date.now()} />
            )}
          </div>

          <div className={styles.illustration}>
            <img src="./assets/FreelancerCatAndPlant.svg" alt="" />
          </div>
        </div>

      </div>

      <CartMenu />
    </div>
  )
}