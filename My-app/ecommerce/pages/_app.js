import {ChakraProvider} from '@chakra-ui/react'
import layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <layout>
    <Component {...pageProps} />
    </layout>
    
    
   
    </ChakraProvider>


  )
   
    
}
