import React from 'react'
import Image from 'next/image'
import search_icon from '../img/search/search_icon2.png'
import debounce from "lodash.debounce"
import { useAppDispatch } from '@/redux/store'
import { SET_SEARCH_VALUE } from '@/redux/filter/filter'
import styles from '../styles/search.module.scss'

const Search = () => {
    
    const [value, setValue] = React.useState<string>('')

    const dispatch = useAppDispatch()

    const changeValue : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const updateSearchValue = React.useCallback(
        debounce((str : string) => {
          dispatch(SET_SEARCH_VALUE(str))
        }, 1000), []
      )

    return (
        <div className={styles.search_block}>
            <input type="text" value={value} onChange={changeValue}/>
            <Image src={search_icon} width={20} alt='search'/>
        </div>
    )
}

export default Search