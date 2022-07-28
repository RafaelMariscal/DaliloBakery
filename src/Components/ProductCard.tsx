import styles from "./ProductCard.module.scss"
import { AiFillShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react"
import { BakeryProductType } from "../../src/Assets/bakery"

function ProductCard({
  id, image, name, description, price, categories, productListOrder }: BakeryProductType
) {

  const [amount, setAmount] = useState(0)

  function handleProductAmount(type: number) {
    switch (type) {
      case -1:
        return amount > 0 && setAmount(state => state - 1)

      case 1:
        return setAmount(state => state + 1)

      default:
        return amount;
    }
  }

  let cardFooterMassage = <></>
  function printCardFooterMessage() {
    cardFooterMassage = <>
      <span>**</span><strong>Contém Carne e/ou Lactose</strong><span>**</span>
    </>

    if (categories.includes("vegan")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Vagano</strong><span>**</span>
      </>
    }
    if (categories.includes("lacfree")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Lacfree</strong><span>**</span>
      </>
    }
    if (categories.includes("vegan" && "lacfree")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Vagano e Lacfree</strong><span>**</span>
      </>
    }
  }
  printCardFooterMessage()

  console.log(productListOrder)

  return (
    <div className={`${styles.card} ${'--item' + productListOrder}`} key={id}>
      <img src={image} alt="" />

      <div className={styles.cardBackground}>
        <h3>{name}</h3>

        <div>
          <span>R$ {price}</span>
          <div className={styles.actions}>
            <button type="button" className={styles.icons}>
              <AiOutlineMinus size={16} onClick={() => handleProductAmount(-1)} />
            </button>
            <strong>{amount}</strong>
            <button type="button" className={styles.icons}>
              <AiOutlinePlus size={16} onClick={() => handleProductAmount(1)} />
            </button>
          </div>
          <button className={styles.chart}>
            <AiFillShopping size={16} />
          </button>
        </div>

        <p>
          {description}
        </p>

        <div className={styles.cardFooter}>
          {cardFooterMassage}
        </div>
      </div>
    </div>
  )
}

export default ProductCard