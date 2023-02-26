import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react/dist/chakra-provider'

const theme = extendTheme({
  colors:{
    brand:{
      blue: "hsl(246, 80%, 60%)",
      darkBlue:"hsl(235, 46%, 20%)",
      veryDarkBlue:"hsl(226, 43%, 10%)",
      desaturatedBlue:"hsl(235, 45%, 61%)",
      paleBlue:"hsl(236, 100%, 87%)",
      work:"hsl(15, 100%, 70%)",
      play:"hsl(195, 74%, 62%)",
      study:"hsl(348, 100%, 68%)",
      exercise:"hsl(145, 58%, 55%)",
      social: "hsl(264, 64%, 52%)",
      selfcare: "hsl(43, 84%, 65%)"
    }
  },
  breakpoints:{
    sm:'376px'
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
        <Component {...pageProps} />
  </ChakraProvider> 
}
