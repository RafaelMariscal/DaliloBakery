import { format } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from "react"
import { BakeryProducts, BakeryProductType } from "../../src/Assets/bakery";

import { HiSearch } from "react-icons/hi"
import styles from "./Header.module.scss"

interface HeaderProps {
  setProductList: (array: BakeryProductType[]) => void
}

function transformToRegularChar(string: string) {
  return string.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
}

export default function Header({ setProductList }: HeaderProps) {
  const [search, setSearch] = useState("")
  let filteredProducts: BakeryProductType[] = []
  useEffect(() => {
    if (!search.trim()) {
      return setProductList(BakeryProducts)
    }
    if (!filteredProducts) {
      return setProductList(BakeryProducts)
    }
    filteredProducts = BakeryProducts.filter(product => {
      const productNameWithRegularChar = transformToRegularChar(product.name.toLowerCase())
      const searchWithRegularChar = transformToRegularChar(search.toLowerCase())
      return productNameWithRegularChar.includes(searchWithRegularChar)
    })
    return setProductList(filteredProducts)
  }, [search])

  return (
    <header className={styles.container}>
      <div className={styles.headerTop}>
        <h1>Bem vindo à Dalilo!</h1>
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
          <p>Siga o Forninho Dalilo no instagram! <a>@forninhodalilo</a></p>
        </div>

        <label className={styles.searchBox}>
          <HiSearch size={25} />
          <input
            placeholder="Busca pelo cardápio..."
            type="text"
            name="research"
            id="research"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
        </label>

      </div>

    </header >
  )
}