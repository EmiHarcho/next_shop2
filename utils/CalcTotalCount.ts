import { BasketCardType } from "@/redux/basket/types"

export const calcTotalCount = (items : BasketCardType[]) => {
    return items.reduce((acc, obj) => obj.count + acc, 0)    
}