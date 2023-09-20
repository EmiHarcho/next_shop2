import { SET_SORT, sortType } from '@/redux/filter/filter'
import React from 'react'
import { useAppDispatch } from '@/redux/store'
import styles from '../styles/sort.module.scss'

const sortNames : sortType[] = [
  {name : 'Умолчанию', sortProperty: 'default'},
  {name : 'Цене', sortProperty: 'price'},
  {name : 'Популярности', sortProperty: 'rating'}
]

type PopupClick =  MouseEvent & {path : Node[]}

const Sort = () => {
     
    const [activeSort, setActiveSort] = React.useState<string>(sortNames[0].name)
    const [sortListState, setSortListState] = React.useState<boolean>(false)
    const sortRef = React.useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()

    //OPEN LIST
    const openSortList = () => {
      sortRef.current && sortRef.current.classList.toggle(styles.active)
      setSortListState(!sortListState)
    }
    //ADD NEW ACTIVE SORT
    const addNewActiveSort = (item : sortType) => {
      setActiveSort(item.name)
      openSortList()
      setSortListState(false)
      dispatch(SET_SORT(item))
    }
    
    //OUTSISE SORT
    const clickOutside = (event : MouseEvent) => {
      const _event = event as PopupClick
      sortRef.current && !_event.composedPath().includes(sortRef.current) && sortListState == true && openSortList()
    }
    

    //ADD EVENTS
    React.useEffect(() => {
      document.addEventListener('click', clickOutside)
      return () => document.removeEventListener('click', clickOutside)
    }, [sortListState])

    return (
      <div className={styles.sort} ref={sortRef}>
          <h3 onClick={openSortList}>Сортировка по: {activeSort}</h3>
          <ul className={styles.sort_list}>
            {sortNames.map((item, i) => (
              <li onClick={() => addNewActiveSort(item)} key={i}>{item.name}</li>
            ))}
          </ul>
      </div>
    )
}

export default Sort
