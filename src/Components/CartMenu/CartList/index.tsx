import styles from "./CartList.module.scss"
import ProductInCart from "./ProductInCart"

interface ChartListProps {
  isSidebarOpen: boolean
}

function CartList({ isSidebarOpen }: ChartListProps) {
  return (
    <div className={`${isSidebarOpen ? styles.container : ''}`}>
      <table className={styles.labels}>
        <thead>
          <tr>
            <th>item</th>
            <th>qtd</th>
            <th>R$</th>
          </tr>
        </thead>
      </table>

      <div className={styles.chartProducts}>

        <ProductInCart key={Math.random()} />
        <ProductInCart key={Math.random()} />
        <ProductInCart key={Math.random()} />
        <ProductInCart key={Math.random()} />

      </div>

      <div className={styles.footer}>
        <table className={styles.acount}>
          <tbody>
            <tr>
              <th>Total Fees</th>
              <th>R$</th>
              <th>00,00</th>
            </tr>

            <tr>
              <th>Discounts</th>
              <th>R$</th>
              <th>00,00</th>
            </tr>

            <tr>
              <th>Total</th>
              <th>R$</th>
              <th>00,00</th>
            </tr>
          </tbody>
        </table>

        <a href="">Continuar para pagamento</a>
      </div>
    </div>
  )
}

export default CartList