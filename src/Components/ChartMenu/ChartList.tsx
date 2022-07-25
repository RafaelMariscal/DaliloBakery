import styles from "./ChartList.module.scss"

interface ChartListProps {
  isSidebarOpen: boolean
}

function ChartList({ isSidebarOpen }: ChartListProps) {
  return (
    <div className={`${isSidebarOpen ? styles.container : ''}`}>
      <table className={styles.labels}>
        <tr>
          <th>item</th>
          <th>qtd</th>
          <th>R$</th>
        </tr>
      </table>

      <div className={styles.chartProducts}>
        <h1>Isso é um teste</h1>
      </div>

      <div className={styles.footer}>
        <table className={styles.acount}>
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
        </table>

        <a href="">Continuar para pagamento</a>
      </div>
    </div>
  )
}

export default ChartList