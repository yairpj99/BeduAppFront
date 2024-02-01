import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRouter from './Router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
