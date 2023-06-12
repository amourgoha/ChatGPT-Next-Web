import '@/styles/globals.css'
import Hander from '../components/hander'
//import Footer from '../components/footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Hander/>
      <Component {...pageProps} />
    </>
    )
}
