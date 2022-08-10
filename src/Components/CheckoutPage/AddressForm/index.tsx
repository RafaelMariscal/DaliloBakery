import { useCallback, useState } from 'react'
import styles from "./styles.module.scss"
import { AiFillCompass } from 'react-icons/ai'
import { BsBank2, BsCashStack, BsCreditCard2Back, BsWallet } from 'react-icons/bs'

interface PaymentTypes {
  method: "credit" | "debit" | "cash"
  label: "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO"
  selected: boolean
}

const UFSTATES = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO',
  'RR', 'SC', 'SP', 'SE', 'TO'
]

function AddressForm() {
  const [paymentTypes, setPaymentTypes] = useState<PaymentTypes[]>([
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

  return (
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
          <select name="UF" id="" placeholder="UF">
            {UFSTATES.map(state => (
              <option
                key={state}
                value={state}
              >{state}
              </option>
            ))}
          </select>
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
          {paymentTypes.map(type => (
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
              {type.method === 'credit' && (<BsCreditCard2Back />)}
              {type.method === 'debit' && (<BsBank2 />)}
              {type.method === 'cash' && (<BsCashStack />)}
              {type.label}
            </label>
          ))}
        </div>
      </div>
    </form>
  )
}

export default AddressForm