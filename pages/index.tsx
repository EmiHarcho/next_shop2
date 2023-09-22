'use client'
import React, { useState } from 'react'
import styles from '../styles/home.module.scss'
import {fetchCards} from '../redux/cards/slice'
import { useAppDispatch, useAppSelector, wrapper } from '@/redux/store'
import { RootState } from '@/redux/store'
import { CardType } from '@/redux/cards/types'
import CardItem from '@/components/CardItem'
import Sort from '@/components/Sort'
import Search from '@/components/search'
import Info_block from '@/components/Info_block'
import MyLoader from '@/components/Skeleton'
import { GetServerSideProps } from 'next'

type propsType = {
  items : CardType[],
  status : string
} 

const Home = (props : propsType) => {

  const [itemsState, setItemsState] = useState(props.items)
  const [statusState, setStatusState] = useState(props.status)
  const [makeRequest, setMakeRequest] = useState(false)
  
  const {items, status} = useAppSelector((state: RootState) => state.cards)
  const {sort, searchValue} = useAppSelector((state: RootState) => state.filter)
  
  const dispatch = useAppDispatch()

  const sortProperty = sort.sortProperty

  const setState = () => {
    setItemsState(items)
    setStatusState(status)
  }
  
  React.useEffect(() => {
    makeRequest && dispatch(fetchCards({sortProperty, searchValue}))
    setMakeRequest(true)
  }, [sort, searchValue])

  React.useEffect(() => {
    makeRequest && setState()
  }, [items])

  
  const cards = itemsState.map((item : CardType) => <CardItem {...item} key={item.id + item.price}/>)
  const loadingItems = [...Array(8)].map(() => <MyLoader/>)

  return (
    <div className={styles.home}>
        <Info_block/>
        <div className={styles.filter_block}>
          <Search/>
          <Sort/>
        </div>
        <div className={styles.cardsList}>
          {statusState == 'loading' ?  loadingItems: cards}
      </div>
    </div>
  )
} 

export const getServerSideProps : GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
const {sort, searchValue} = store.getState().filter
const sortProperty = sort.sortProperty
await store.dispatch(fetchCards({sortProperty, searchValue}))
const {items, status} = store.getState().cards
return {props: {items, status}}})

export default Home