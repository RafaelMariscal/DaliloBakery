import styles from "./ProductCard.module.scss"
import { AiFillShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function ProductCard() {
  return (
    <div className={styles.card}>
      <img src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100" alt="" />

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