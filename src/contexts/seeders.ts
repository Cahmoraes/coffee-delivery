import coffeeImg_1 from '../assets/images/Image-1.svg'
import coffeeImg_2 from '../assets/images/Image-2.svg'
import coffeeImg_3 from '../assets/images/Image-3.svg'
import coffeeImg_4 from '../assets/images/Image-4.svg'
import coffeeImg_5 from '../assets/images/Image-5.svg'
import coffeeImg_6 from '../assets/images/Image-6.svg'
import coffeeImg_7 from '../assets/images/Image-7.svg'
import coffeeImg_8 from '../assets/images/Image-8.svg'
import coffeeImg_9 from '../assets/images/Image-9.svg'
import coffeeImg_10 from '../assets/images/Image-10.svg'
import coffeeImg_11 from '../assets/images/Image-11.svg'
import coffeeImg_12 from '../assets/images/Image-12.svg'

export type Categories =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export interface ICoffee {
  img_url: string
  categories: Categories[]
  name: string
  description: string
  value: number
}

export const coffeeList: ICoffee[] = [
  {
    img_url: coffeeImg_1,
    categories: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    name: 'Café com Leite',
    value: 9.9,
  },
  {
    img_url: coffeeImg_2,
    categories: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    name: 'Expresso Americano',
    value: 9.9,
  },
  {
    img_url: coffeeImg_3,
    categories: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    name: 'Expresso Cremoso',
    value: 9.9,
  },
  {
    img_url: coffeeImg_4,
    categories: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    name: 'Expresso Gelado',
    value: 9.9,
  },
  {
    img_url: coffeeImg_5,
    categories: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
    value: 9.9,
  },
  {
    img_url: coffeeImg_6,
    categories: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    name: 'Capuccino',
    value: 9.9,
  },
  {
    img_url: coffeeImg_7,
    categories: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    name: 'Macchiato',
    value: 9.9,
  },
  {
    img_url: coffeeImg_8,
    categories: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    name: 'Mocaccino',
    value: 9.9,
  },
  {
    img_url: coffeeImg_9,
    categories: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Chocolate Quente',
    value: 9.9,
  },
  {
    img_url: coffeeImg_10,
    categories: ['especial', 'alcoólico', 'gelado'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Cubano',
    value: 9.9,
  },
  {
    img_url: coffeeImg_11,
    categories: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    name: 'Havaiano',
    value: 9.9,
  },
  {
    img_url: coffeeImg_12,
    categories: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    name: 'Árabe',
    value: 9.9,
  },
]
