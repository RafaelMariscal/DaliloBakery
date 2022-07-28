import styles from "./ProductCard.module.scss"
import { AiFillShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BakeryProductType } from "../../src/Assets/bakery"
import { useCart } from "../hooks/useCart"

interface ProductCardProps {
  product: BakeryProductType
  productListOrder: number
}

function ProductCard({ product, productListOrder }: ProductCardProps) {

  let cardFooterMassage = <></>
  function printCardFooterMessage() {
    cardFooterMassage = <>
      <span>**</span><strong>Contém Carne e/ou Lactose</strong><span>**</span>
    </>

    if (product.categories.includes("vegan")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Vagano</strong><span>**</span>
      </>
    }
    if (product.categories.includes("lacfree")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Lacfree</strong><span>**</span>
      </>
    }
    if (product.categories.includes("vegan" && "lacfree")) {
      cardFooterMassage = <>
        <span>**</span><strong>Produto Vagano e Lacfree</strong><span>**</span>
      </>
    }
  }
  printCardFooterMessage()

  const {
    cart,
    addItemToCart,
    increaseProductQuantityByOne,
    decreaseProductQuantityByOne
  } = useCart()

  const cartProduct = cart.find(item => item.productId === product.id)

  function handleAddToCart() {
    addItemToCart(product.id)
  }

  function handleIncreaseQuantity() {
    if (cartProduct === undefined) {
      return addItemToCart(product.id)
    }
    increaseProductQuantityByOne(product.id)
  }

  function handleDecreaseQuantity() {
    decreaseProductQuantityByOne(product.id)
  }

  return (
    <div className={`${styles.card} ${'--item' + productListOrder}`} key={product.id}>
      <img src={product.image} alt="" />

      <div className={styles.cardBackground}>
        <h3>{product.name}</h3>

        <div>
          <span>R$ {product.price}</span>
          <div className={styles.actions}>
            <button type="button" className={styles.icons}>
              <AiOutlineMinus size={16} onClick={handleDecreaseQuantity} />
            </button>

            <strong>{cartProduct?.quantity ?? 0}</strong>

            <button type="button" className={styles.icons}>
              <AiOutlinePlus size={16} onClick={handleIncreaseQuantity} />
            </button>
          </div>
          <button className={styles.cart} onClick={handleAddToCart}>
            <AiFillShopping size={16} />
          </button>
        </div>

        <p>
          {product.description}
        </p>

        <div className={styles.cardFooter}>
          {cardFooterMassage}
        </div>
      </div>
    </div>
  )
}

export default ProductCard