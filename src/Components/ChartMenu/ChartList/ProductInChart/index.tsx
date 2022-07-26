import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./ProductInChart.module.scss";

function ProductInChart() {
  return (
    <div className={styles.container}>
      <div className={styles.productDescription}>
        <div>
          <img src="https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0Nzk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700" alt="" />

          <div className={styles.description}>
            <p>
              Pãozinho Dalilo calabresa caramelizada
            </p>
            <div>
              <span>R$ </span> <span>49,90</span>
            </div>
          </div>
        </div>

        <div className={styles.productAmout}>
          <AiOutlineMinus size={12} className={styles.icon} />
          <span>0</span>
          <AiOutlinePlus size={12} className={styles.icon} />
        </div>

        <div className={styles.total}>
          <span>R$ </span>
          <span>0,00</span>
        </div>

      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}

export default ProductInChart