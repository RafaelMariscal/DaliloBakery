import styles from "./ProductCard.module.scss"
import { AiFillShopping } from 'react-icons/ai'
import { BakeryProductType } from "../../src/Assets/bakery"
import { useCart } from "../hooks/useCart"

interface ProductCardProps {
  product: BakeryProductType
}

function ProductCard({ product }: ProductCardProps) {
  const { addItemToCart } = useCart()

  function handleAddToCart() {
    addItemToCart(product.id)
  }

  let cardFooterMassage = <>
    <span>**</span><strong>Contém Carne e/ou Lactose</strong><span>**</span>
  </>
  if (product.categories.includes("vegan")) {
    cardFooterMassage = <>
      <span>**</span><strong>Produto Vagano</strong><span>**</span>
    </>
  }
  if (product.categories.includes("vegan" && "lacfree")) {
    cardFooterMassage = <>
      <span>**</span><strong>Produto Vagano e Lacfree</strong><span>**</span>
    </>
  }

  return (
    <div className={`${styles.card}`} key={product.id}>
      <img src={product.image} alt="" />

      <div className={styles.cardBackground}>
        <h3>{product.name}</h3>

        <div>
          <span>
            {product.price.toLocaleString('pt-BR',
              { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
            )}
          </span>
          <button className={styles.cart} onClick={handleAddToCart}>
            <span>COMPRAR</span>
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