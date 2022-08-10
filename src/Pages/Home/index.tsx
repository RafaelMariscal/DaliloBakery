import { BakeryProducts, BakeryProductType, Category } from "../../../src/Assets/bakery";
import FreelancerCatAndPlant from "../../Assets/FreelancerCatAndPlant.svg";

import CartMenu from "../../Components/CartMenu"
import Header from "../../Components/Header"
import Menu from "../../Components/Menu"
import ProductCard from "../../Components/ProductCard"
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Home.module.scss"
import { useCallback, useState } from "react";

export function Home() {
  const [productList, setProductList] = useState(BakeryProducts)

  const handleProductsCategory = useCallback(async (categories: Category[]) => {
    const filteredProductList: BakeryProductType[] = []
    if (categories.includes('all')) {
      return setProductList(BakeryProducts)
    }
    categories.map(category => {
      BakeryProducts.map(product => {
        if (product.categories.includes(category)) {
          filteredProductList.push(product)
        }
      })
    })
    await clearProducts()
    return setProductList(filteredProductList)
  }, [])

  const clearProducts = useCallback(async () => {
    return setProductList([])
  }, [])

  return (
    <div className={styles.container}>

      <Menu categoryFilter={handleProductsCategory} />

      <div className={styles.content}>
        <Header setProductList={setProductList} />

        <h2>
          <GiSlicedBread size={24} />
          Nossos Produtos:
        </h2>

        <div>
          <div className={styles.products}>
            {productList.length === 0 ? (
              <h2>😔 Nenhum produto encontrado...</h2>
            ) : (
              productList.map(product =>
                <ProductCard
                  key={product.id}
                  product={product}
                  productListOrder={productList.indexOf(product)}
                />
              )
            )}
          </div>

          <div className={styles.illustration}>
            <img src={FreelancerCatAndPlant} alt="" />
          </div>
        </div>

      </div>

      <CartMenu />
    </div>
  )
}