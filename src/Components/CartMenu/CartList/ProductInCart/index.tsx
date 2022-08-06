import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/Fa";
import { BakeryProducts } from "../../../../Assets/bakery";
import { ICartItem, useCart } from "../../../../hooks/useCart";
import styles from "./ProductInCart.module.scss";

function ProductInCart({ productId, quantity, totalPrice, unityPrice }: ICartItem) {
  const cartProduct = BakeryProducts.find(product => product.id === productId)

  const {
    increaseProductQuantityByOne,
    decreaseProductQuantityByOne,
    removeItemFromCart
  } = useCart()

  function handleIncreaseQuantity() {
    increaseProductQuantityByOne(productId)
  }

  function handleDecreaseQuantity() {
    decreaseProductQuantityByOne(productId)
  }

  function handleRemoveFromCart() {
    if (confirm("Deseja realmente remover o item do carrinho?")) {
      removeItemFromCart(productId)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDescription}>
        <div>
          <img src={cartProduct?.image} alt="" />

          <div className={styles.description}>
            <p>
              {cartProduct?.name}
            </p>
            <div>
              <span>R$ </span> <span>{unityPrice}</span>
            </div>
          </div>
        </div>

        <div className={styles.productAmout}>
          <AiOutlineMinus size={12} className={styles.icon} onClick={handleDecreaseQuantity} />

          <span>{quantity}</span>

          <AiOutlinePlus size={12} className={styles.icon} onClick={handleIncreaseQuantity} />
        </div>

        <div className={styles.total}>
          <span>
            {totalPrice.toLocaleString('pt-BR',
              { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
            )}
          </span>
        </div>

        <div className={styles.removeProduct} onClick={handleRemoveFromCart}>
          <FaTrashAlt size={16} />
        </div>
      </div>
    </div>
  )
}

export default ProductInCart