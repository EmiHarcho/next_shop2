// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CardType } from '@/redux/cards/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardType[]>
) {
  res.status(200).json(
    [
      {
        id : 1,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/3/3024/3024939/previews/people_4_manshortfull_front_white_700.jpg',
        count : 0,
      },
      {
        id : 2,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/3/3441/3441659/previews/people_1_women_tshirts_luminous_front_black_500.jpg',
        count : 0,
      },
      {
        id : 3,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/3/3383/3383561/previews/people_7_manshort_front_black_700.jpg',
        count : 0,
      },
      {
        id : 4,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/2/2068/2068005/previews/people_4_manshortfull_front_white_700.jpg',
        count : 0,
      },
      {
        id : 5,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/2/2901/2901673/previews/people_4_manshortfull_front_white_700.jpg',
        count : 0,
      },
      {
        id : 6,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/3/3021/3021235/previews/people_4_manshortfull_front_white_700.jpg',
        count : 0,
      },
      {
        id : 7,
        price : 233,
        sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        img : 'https://storage.vsemayki.ru/images/0/3/3009/3009573/previews/people_4_manshortfull_front_white_700.jpg',
        count : 0,
      }
    ]
  )
}
