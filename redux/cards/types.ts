export type CardType = {
    id : number,
    name : string,
    sizes : string[]
    price : number,
    img : string,
    count : 0,
    rating : number
}
export enum Status  {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}
export interface StateType{
    items : CardType[],
    status : Status
}