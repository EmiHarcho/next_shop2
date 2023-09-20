import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import {Providers} from '../redux/provider'
import { wrapper } from '../redux/store'
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {

  const store: any = useStore()

  return(
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    
  )
}
  
export default wrapper.withRedux(App)