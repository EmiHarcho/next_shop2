'use client'
import { Provider } from "react-redux"
import {makeStore} from './store'

export function Providers({children} : any){
    return (
        <Provider store={makeStore()}>
            {children}
        </Provider>
    )
}

export default Providers