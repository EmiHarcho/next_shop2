export type RemoveProps = {
    id : number,
    activeSize : string
}

export type BasketCardType = {
    id : number,
    activeSize : string
    price : number,
    img : string,
    count : number
}

export interface Ibasket {
    basketItems : BasketCardType[],
    totalPrice : number,
}