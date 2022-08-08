import { BakeryProducts, BakeryProductType } from "../../Assets/bakery"
import { useCart } from "../../hooks/useCart"
import { AiFillShopping, AiFillCompass } from 'react-icons/ai'
import { BsWallet, BsCashStack, BsCreditCard2Back, BsBank2 } from 'react-icons/bs'

import LogoDalilo from "../../Assets/LogoDalilo.svg";
import Komb from "../../Assets/komb.svg"
import Mountains from "../../Assets/Mountains.svg"
import styles from "./styles.module.scss"
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export function Checkout() {
  const { cart } = useCart()
  const [paymentTypes, setPaymentTypes] = useState([
    { method: "credit", label: "CARTÃO DE CRÉDITO", selected: false },
    { method: "debit", label: "CARTÃO DE DÉBITO", selected: false },
    { method: "cash", label: "DINHEIRO", selected: false },
  ])

  const handlePaymentSelector = useCallback((method: string) => {
    const newPaymentTypes = paymentTypes.map(type => {
      if (type.method === method) {
        type.selected = true
      } else {
        type.selected = false
      }
      return type
    })
    setPaymentTypes(newPaymentTypes)
  }, [paymentTypes])

  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO',
    'RR', 'SC', 'SP', 'SE', 'TO'
  ]
  const ProductsInCart: BakeryProductType[] = []
  cart.map(cartProduct => {
    const productToBeListed = BakeryProducts.find(stockProduct => stockProduct.id === cartProduct.productId)
    return productToBeListed && ProductsInCart.push(productToBeListed)
  })

  return (
    <div className={styles.container}>
      <img src={Mountains} alt="mountains" />
      <img src={Komb} alt="komb" />
      <header className={styles.checkoutHeader}>
        <div>

          <div>
            <Link to={'/'}>
              <img src={LogoDalilo} alt="" />

              <div>
                <h1>Checkout</h1>
                <p>Confirme as informações do seu pedido!</p>
              </div>
            </Link>

          </div>

          <Link to={'/'}>
            Return to Shop
            <AiFillShopping size={24} />
          </Link>

        </div>

      </header>

      <div className={styles.formsContainer}>
        <form className={styles.checkoutForm} name="orderForm">
          <div className={styles.topCard}>
            <header>
              <AiFillCompass size={20} />
              <div>
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido!</p>
              </div>
            </header>

            <input type="text" name="zipCode" placeholder="Cep (00000-000)" />
            <input type="text" name="street" placeholder="Rua (Av. Doutor Fulano de Tal)" />

            <div>
              <input type="number" name="number" placeholder="Número" />
              <input type="text" name="details" placeholder="Complemento (Apt, Bloco, Casa nº...)" />
            </div>
            <div>
              <input type="text" name="neighborhood" placeholder="Bairro" />
              <input type="text" name="city" placeholder="Cidade" />
              <input type="text" name="state" placeholder="UF" maxLength={2} style={{ textTransform: "uppercase" }} />
            </div>
          </div>
          <div className={styles.bottomCard}>
            <header>
              <BsWallet size={17} />
              <div>
                <h2>Pagamento</h2>
                <p>O pagamento é feito na entrega. Como deseja pagar?</p>
              </div>
            </header>

            <div className={styles.checkboxContainer}>
              {
                paymentTypes.map(type => (
                  <label
                    key={type.method}
                    htmlFor={type.method}
                    className={`${type.selected ? styles.checked : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id={type.method}
                      value={type.method}
                      onClick={() => handlePaymentSelector(type.method)}
                    />
                    <BsBank2 />
                    {type.label}
                  </label>
                ))
              }
            </div>

          </div>

        </form>

        <div className={styles.oderCard}>

        </div>

      </div>

      {/* <ul>
        {
          ProductsInCart.map(product => {
            return (
              <h2>{product.name}</h2>
            )
          })
        }
      </ul> */}
    </div>

  )
}