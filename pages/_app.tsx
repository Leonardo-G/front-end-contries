import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from "@next/font/google";
import { UIProvider } from '../context/UI/UIProvider';

const nunito = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <style jsx global>{`
        html {
          font-family: ${ nunito.style.fontFamily };
        }
      `}</style>
        <Component {...pageProps} />
      
    </UIProvider>
  )
    
}
