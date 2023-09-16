import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux'
import {store} from '../redux/store'
import {Providers} from '../redux/provider'

const App = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
)
export default App