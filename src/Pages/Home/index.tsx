import ChartMenu from "../../Components/ChartMenu"
import Header from "../../Components/Header"
import Menu from "../../Components/Menu"
import ProductCard from "../../Components/ProductCard"
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Home.module.scss"

export function Home() {

  const array = [
    "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0Nzk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0Nzc3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1613929231151-d7571591259e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFrZXJ5fHx8fHx8MTY1ODc1NDY2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFrZXJ5fHx8fHx8MTY1ODc1NDY3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1620921592619-652411a0d01a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0NzY0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1595397351604-cf490cc38bf1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFrZXJ5fHx8fHx8MTY1ODc1NDY1NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1555003506-05653db6af47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0ODE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
    "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWR8fHx8fHwxNjU4NzU0ODAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=700",
  ]

  return (
    <div className={styles.container}>

      <Menu />

      <div className={styles.content}>
        <Header />

        <h2>
          <GiSlicedBread size={24} />
          Nossos Produtos:
        </h2>

        <div>
          <div className={styles.products}>
            {array.map(imgSrc =>
              <ProductCard imgSrc={imgSrc} />
            )}
          </div>

          <div className={styles.illustration}>
            <img src="./assets/FreelancerCatAndPlant.svg" alt="" />
          </div>
        </div>

      </div>

      <ChartMenu />
    </div>
  )
}