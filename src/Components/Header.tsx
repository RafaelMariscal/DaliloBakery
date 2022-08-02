import { format } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { FormEvent, useEffect, useState } from "react"
import { BakeryProducts, BakeryProductType, Category } from "../../src/Assets/bakery";

import { HiSearch } from "react-icons/hi"
import styles from "./Header.module.scss"

interface HeaderProps {
  setProductList: (array: BakeryProductType[]) => void
}

export default function Header({ setProductList }: HeaderProps) {
  const [search, setSearch] = useState("")
  let filteredProducts: BakeryProductType[] = []

  useEffect(() => {
    if (!search.trim()) {
      return
    }
    if (!filteredProducts) {
      return setProductList(BakeryProducts)
    }
    filteredProducts = BakeryProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

    return setProductList(filteredProducts)

  }, [search])


  function handleSearchProduct(event: FormEvent, search: string) {
    event.preventDefault()
    if (!search.trim()) {
      return
    }
    filteredProducts = BakeryProducts.filter(product => product.name.includes(search))

    setProductList(filteredProducts)
    if (!filteredProducts) {
      setProductList(BakeryProducts)
    }
  }

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

        <form /* onSubmit={(e) => handleSearchProduct(e, search)} */>
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
        </form>

      </div>

    </header >
  )
}