import styles from "./ProductCard.module.scss"
import { AiFillShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react"

interface ProductCardProps {
  imgSrc: string
  // ProductName: string
  // ProductPrice: number
  // ProductDescription: string
}

function ProductCard({ imgSrc }: ProductCardProps) {

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

  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="" />

      <div className={styles.cardBackground}>
        <h3>Pãozinho Dalilo calabresa caramelizada</h3>

        <div>
          <span>R$ 49,90</span>
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
          Pãozinho Dalilo recheado com calabreza, cebola caramelizada, queijo mussarela e catupiry.
        </p>

        <div className={styles.cardFooter}>
          <span>**</span><strong>contém Gluten e Lactose</strong><span>**</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard