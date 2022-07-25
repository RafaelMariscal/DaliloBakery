import styles from "./ProductCard.module.scss"
import { AiFillShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface ProductCardProps {
  imgSrc: string
  // ProductName: string
  // ProductPrice: number
  // ProductDescription: string
}

function ProductCard({ imgSrc }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="" />

      <div className={styles.cardBackground}>
        <h3>Pãozinho Dalilo calabresa caramelizada</h3>

        <div>
          <span>R$ 49,90</span>
          <div className={styles.actions}>
            <AiOutlineMinus size={16} className={styles.icons} />
            <strong>0</strong>
            <AiOutlinePlus size={16} className={styles.icons} />
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