import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { MainCointainer } from './components/MainCointainer'
import { CreateContainer } from './components/CreateContainer'

import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (

    <AnimatePresence exitBeforeEnter>

    <div className=" w-screen h-auto flex flex-col bg-primary">
      <Header/>

      <main className='mt-16 md:mt-12 p-6 w-full' >
          <Routes>
            <Route path="/*" element={<MainCointainer/>} />
            <Route path="/createItem" element={<CreateContainer/>} />
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App