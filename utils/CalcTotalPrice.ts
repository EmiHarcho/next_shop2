import { BasketCardType } from "@/redux/basket/types";

export const calcTotalPrice = (items : BasketCardType[]) => {
    return items.reduce((acc, obj) => obj.price * obj.price + acc, 0)
}