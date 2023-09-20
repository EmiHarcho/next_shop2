// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CardType } from '@/redux/cards/types'

const CardItems : CardType[] = [
  {
    id : 1,
    name : 'Uniqlo U AIRism',
    price : 1000,
    rating : 1,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACA440601_18128498_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 2,
    name : 'Uniqlo U AIRism',
    price : 1350,
    rating : 3,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACA440501_18128493_1_v2_2x.jpg',
    count : 0,
  },
  {
    id : 3,
    name : 'PEXE TARGET',
    price : 1250,
    rating : 3,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACN063101_19476115_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 4,
    name : 'PEXE TARGET',
    price : 1100,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACN063201_19472799_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 5,
    name : 'Uniqlo U AIRism',
    price : 1380,
    rating : 1,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACF559901_18722232_1_v2_2x.jpg',
    count : 0,
  },
  {
    id : 6,
    name : 'PEXE LOGO',
    price : 1250,
    rating : 3,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACN062701_19472788_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 7,
    name : 'Finnn Flare',
    price : 1500,
    rating : 1,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MZE0_19911979_1_v1.jpeg',
    count : 0,
  },
  {
    id : 8,
    name : 'Uniqlo U AIRism',
    price : 1280,
    rating : 3,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACA439501_18128436_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 9,
    name : 'Puncher',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V8HG_20735515_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 10,
    name : 'Envylab',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0B2OW_20676475_1_v1_2x.jpeg',
    count : 0,
  },
  {
    id : 11,
    name : 'Puncher',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V8H6_20739913_1_v1_2x.jpg',
    count : 0,
  },  
  {
    id : 12,
    name : 'Envylab',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM097ZM_18622602_1_v1.jpeg',
    count : 0,
  },  
  {
    id : 13,
    name : 'UNIQLO',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACA440701_18128503_1_v1_2x.jpg',
    count : 0,
  },  
  {
    id : 14,
    name : 'lacoste',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0B2DU_20700820_1_v1_2x.jpg',
    count : 0,
  }, 
  {
    id : 15,
    name : 'Versta',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/R/T/RTLACT771401_20402242_1_v1_2x.jpg',
    count : 0,
  },
  {
    id : 16,
    name : 'Puncher',
    price : 1150,
    rating : 2,
    sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    img : 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V8HJ_20737680_1_v1_2x.jpg',
    count : 0,
  },
]

const sortItems = (sortProperty : any, items : CardType[]) => {
  if(sortProperty == 'price') return [...items].sort((a, b) => a.price - b.price)
  if(sortProperty == 'rating') return [...items].sort((a, b) => a.rating - b.rating)
  return items
}

const searchItems = (searchValue : any, items : CardType[]) => {
  return items.filter((items) => items.name.toLowerCase().includes(searchValue))
}

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  
  try {
      const sortProperty = req.query.sort
      const search = req.query.search
      let filterItems

      filterItems = sortItems(sortProperty, CardItems)
      if(search) filterItems = searchItems(search, filterItems)
      res.status(200).json(filterItems)

  } catch (error) {
    res.status(500).json({  
      message : 'не удалось подключиться'
    })
  }
}
export default handler


