import { BasketCardType } from '@/redux/basket/types'
import { calcTotalCount } from './CalcTotalCount'
import { calcTotalPrice } from './CalcTotalPrice'


export const getItemsLS = () => {
    
    const data = typeof window !== 'undefined' && localStorage.getItem('basket')
    const basketItems = data ? JSON.parse(data) as BasketCardType[] : []
    
    const totalCount = calcTotalCount(basketItems)
    const totalPrice = calcTotalPrice(basketItems)
    
        return {
            basketItems,
            totalCount,
            totalPrice
        }
}