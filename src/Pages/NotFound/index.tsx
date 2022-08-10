import { Link } from 'react-router-dom'
import NotFoundImg from '../../Assets/notFoundImg.svg'
import LogoDalilo from '../../Assets/LogoDalilo.svg'
import styles from './styles.module.scss'
import { AiFillShopping } from 'react-icons/ai'
function NotFound() {
  return (
    <div className={styles.container}>
      <header className={styles.checkoutHeader}>
        <div>
          <div>
            <Link to={'/'}>
              <img src={LogoDalilo} alt="" />

              <div>
                <h1>Forninho Dalilo</h1>
                <p>A melhor Boutique de Pães Artesanais do Brasil!</p>
              </div>
            </Link>
          </div>

          <Link to={'/'} className={styles.linkToHome}>
            Return to Shop
            <AiFillShopping size={24} />
          </Link>

        </div>

      </header>

      <Link to={'/'}>
        <img src={NotFoundImg} alt="" />

        <Link to={'/'} className={styles.linkToHome}>
          Return to Shop
        </Link>
      </Link>
    </div>
  )
}

export default NotFound