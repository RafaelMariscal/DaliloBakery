import { useCart } from "../../../hooks/useCart"
import EmptyPlace from "../../../Assets/EmptyPlace.svg";
import styles from "./CartList.module.scss"
import ProductInCart from "./ProductInCart"
import { useCallback } from "react";
import { Link } from "react-router-dom";

interface CartListProps {
  isSidebarOpen: boolean
}

function CartList({ isSidebarOpen }: CartListProps) {
  const { cart, subTotal, totalOrder, resetCart } = useCart()
  const totalFees = totalOrder - subTotal


  const handleResetCart = useCallback(() => {
    if (cart.length) {
      if (confirm("Você quer remover todos os produtos do carrinho?")) {
        resetCart()
      }
    }
  }, [cart])

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

      <div className={styles.cartProducts}>

        {
          cart.length ? (
            cart.map(product => <ProductInCart key={product.id} {...product} />)
          ) : (
            <div className={styles.emptyCart}>
              <h3>😔 Sem itens no carrinho...</h3>
              <img src={EmptyPlace} alt="" />
            </div>
          )
        }

      </div>

      <div className={styles.footer}>
        <table className={styles.acount}>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <th>R$</th>
              <th>
                {subTotal.toLocaleString('pt-BR',
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
              </th>
            </tr>

            <tr>
              <th>Taxas previstas</th>
              <th>R$</th>
              <th>
                {totalFees.toLocaleString('pt-BR',
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
              </th>
            </tr>

            <tr>
              <th>Total do pedido</th>
              <th>R$</th>
              <th>
                {totalOrder.toLocaleString('pt-BR',
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
              </th>
            </tr>
          </tbody>
        </table>

        <div className={styles.cartListActions}>
          <button type="button" onClick={() => handleResetCart()}>reset</button>
          <button type="button">
            <Link to={cart.length ? '/checkout' : ''}>Continuar para pagamento</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartList