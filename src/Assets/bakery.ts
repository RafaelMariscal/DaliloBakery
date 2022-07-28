import LacfreeAmeixa from "./LacfreeAmeixa.jpg"
import LacfreeCalabresa from "./LacfreeCalabresa.jpeg"
import LacfreeStandard from "./LacfreeStandard.jpg"
import SaltyCalabresa from "./SaltyCalabresa.jpg"
import SaltyIntegral from "./SaltyIntegral.jpg"
import SaltyStandard from "./SaltyStandard.jpg"
import SweetCocoCrumbleMaca from "./SweetCocoCrumbleMaca.jpg"
import SweetFrutasVermelhas from "./SweetFrutasVermelhas.jpg"
import SweetGotasChocolate from "./SweetGotasChocolate.jpg"
import TinyAmoraMaca from "./TinyAmoraMaca.jpg"
import TinyFolheado from "./TinyFolheado.png"
import TinyGotasChocolate from "./TinyGotasChocolate.jpg"
import TinyLimao from "./TinyLimao.jpg"
import VeganAustraliano from "./VeganAustraliano.jpg"
import VeganEspinafreRicota from "./VeganEspinafreRicota.jpg"
import VeganPistache from "./VeganPistache.jpg"

export type Category = 'salty' | 'sweet' | 'tiny' | 'lacfree' | 'vegan' | 'all'

export interface BakeryProductType {
  name: string
  description: string
  price: number,
  image: any,
  id: string,
  categories: Category[],
  productListOrder?: number
}

export const BakeryProducts: BakeryProductType[] = [
  {
    name: 'Pãozinho Dalilo Original',
    description: 'Pãozinho de fermentação natural, muito amor e longas horas de maturação. O resultado é um pão cheio de sabor, com miolo macio e casca crocante.',
    price: 29.90,
    image: SaltyStandard,
    id: 'daliloStandard-38d8',
    categories: ['salty'],
  },
  {
    name: 'Calabresa Caramelizada',
    description: 'Pãozinho de fermentação natural, recheado com calabresa e cebola caramelizada, queijo mussarella e catupiry.',
    price: 39.00,
    image: SaltyCalabresa,
    id: 'saltyCalabresa-dh3i',
    categories: ['salty'],
  },
  {
    name: 'Pãozinho Dalilo Integral',
    description: 'Pãozinho de fermentação natural, muito amor e longas horas de maturação, adicionando à receita padrão 12 grãos de seleção personalizada.',
    price: 34.90,
    image: SaltyIntegral,
    id: 'saltyIntegral-ir8g',
    categories: ['salty'],
  },
  {
    name: 'Lacfree Com Ameixa',
    description: 'Pãozinho recheado com Ameixas, feito com longas horas de maturação, muito amor e cuidado para os nossos clientes que buscam itens sem Lactose.',
    price: 39.9,
    image: LacfreeAmeixa,
    id: 'lacfreeAmeixa-3ab5',
    categories: ['lacfree', 'vegan', 'salty'],
  },
  {
    name: 'Lacfree Com Calabresa',
    description: 'Pãozinho recheado com Ameixas, feito com longas horas de maturação, muito amor e cuidado para os nossos clientes que buscam itens sem Lactose.',
    price: 39.9,
    image: LacfreeCalabresa,
    id: 'lacfreeCalabresa-v4d1',
    categories: ['lacfree', 'salty'],
  },
  {
    name: 'Dalilo Lacfree Original',
    description: 'Pãozinho de fermentação natural, longas horas de maturação, muito amor e cuidado para os nossos clientes que buscam itens sem Lactose.',
    price: 34.9,
    image: LacfreeStandard,
    id: 'lacfreeStandard-gas5',
    categories: ['lacfree', 'vegan', 'salty'],
  },
  {
    name: 'Côco c/ Crumble de Maçã',
    description: 'Pãozinho de Côco de fermentação natural, feito com muito amor, carinho e cobertura de crumble de Maçã.',
    price: 39.90,
    image: SweetCocoCrumbleMaca,
    id: 'sweetCocoCrumbleMaca-d31g',
    categories: ['sweet'],
  },
  {
    name: 'Dalilo de Frutas Vermelhas',
    description: 'Pãozinho de fermentação natural, feito com muito amor, carinho e recheado com geleia de frutas vermelhas e açucar de confeiteiro.',
    price: 44.90,
    image: SweetFrutasVermelhas,
    id: 'sweetFrutasVermelhas-la1s',
    categories: ['sweet'],
  },
  {
    name: 'Dalilo com Gotas de Chocolate',
    description: 'Pãozinho de fermentação natural, feito com muito amor, carinho e recheado com gotas de chocolate e açucar de confeiteiro.',
    price: 18.9,
    image: SweetGotasChocolate,
    id: 'sweetGotasChocolate-h5k2',
    categories: ['sweet'],
  },
  {
    name: 'Dalilinho de Maçã e Amora',
    description: 'Mini pãozinho de maçã, feito com muito amor, carinho e recheado com amoras.',
    price: 19.9,
    image: TinyAmoraMaca,
    id: 'tinyAmoraMaca-gk6s',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Dalilinho Folheado',
    description: 'Mini Pãozinho Dalilo Folheado, feito com muito amor, carinho e manteiga da terra.',
    price: 19.9,
    image: TinyFolheado,
    id: 'tinyFolheado',
    categories: ['tiny', 'salty'],
  },
  {
    name: 'Cookies Dalilo de Chocolate ',
    description: 'Receita da Familia Dalilo, um tradicional cookie com gotas de chocolate belga.',
    price: 19.9,
    image: TinyGotasChocolate,
    id: 'tinyGotasChocolate-cbf3',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Dalilinho de Limão e Amêndoas',
    description: 'Mini Pãozinho Dalilo de fermentação natural, recheado com creme de limão e coberto com raspas de Amêndoas.',
    price: 24.9,
    image: TinyLimao,
    id: 'tinyLimao-cg12',
    categories: ['tiny', 'sweet'],
  },
  {
    name: 'Dalilo Autraliano Vegano',
    description: 'Pãozinho Dalilo Autraliano, feito com fermentação natural, muito amor e carionho para os nossos clientes que buscam produtos veganos/lacfree.',
    price: 39.9,
    image: VeganAustraliano,
    id: 'veganAustraliano-aj9v',
    categories: ['vegan', 'lacfree', 'salty'],
  },
  {
    name: 'Dalilo de Ricota c/ Espinafre',
    description: 'Pãozinho Dalilo Vegano feito com fermentação natural, recheado com creme de ricota com espinafre.',
    price: 18.9,
    image: VeganEspinafreRicota,
    id: 'veganEspinafreRicota-k12d',
    categories: ['vegan', 'salty'],
  },
  {
    name: 'Dalilo Vegano de Pistache',
    description: 'Pãozinho Dalilo Vegano feito com fermentação natural, muito amor, carinho e raspas de pistache.',
    price: 18.9,
    image: VeganPistache,
    id: 'veganPistache-l1po',
    categories: ['vegan', 'salty'],
  },
]