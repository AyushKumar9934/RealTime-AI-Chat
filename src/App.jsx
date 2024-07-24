import { useState } from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from '@/components/Chats'


function App() {
 

  return (
    <>
      <div className='app'><BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
      
      
      </BrowserRouter></div>
    </>
  )
}

export default App
