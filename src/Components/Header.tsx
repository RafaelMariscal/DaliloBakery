import { format } from "date-fns"
import { ptBR } from 'date-fns/locale'

import { HiSearch } from "react-icons/hi"
import styles from "./Header.module.scss"


export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.headerTop}>
        <h1>Bem vindo à Dalio!</h1>
        <div>
          <span>Data de acesso: </span>
          <time>
            {
              format(new Date(), "EEEEEE' - ' dd '/' MM '/' u", {
                locale: ptBR,
              }).toLocaleUpperCase()
            }
          </time>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <div>
          <p>A melhor Boutique de <strong>Pães Artesanais</strong> do Brasil!</p>
          <p>Siga o forninho Dalilo no instagram! <a>@forninhodalilo</a></p>
        </div>

        <label className={styles.searchBox}>
          <HiSearch size={25} />
          <input
            placeholder="Busca pelo cardápio..."
            type="text"
            name="research"
            id="research"
          />
        </label>

      </div>

    </header >
  )
}