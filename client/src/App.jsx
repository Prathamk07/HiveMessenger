import React from 'react'
import {Button} from '@/components/ui/button'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './pages/auth'
import Profile from './pages/profile'
import Chat from './pages/chat'
import Notfound from './pages/notfound'

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App