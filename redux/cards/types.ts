export type CardType = {
    id : number,
    sizes : string[]
    price : number,
    img : string,
    count : 0,
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