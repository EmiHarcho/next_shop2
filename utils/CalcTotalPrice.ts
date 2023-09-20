import { BasketCardType } from "@/redux/basket/types";

export const calcTotalPrice = (items : BasketCardType[]) => {
    return items.reduce((acc, obj) => obj.price * obj.count + acc, 0)
}