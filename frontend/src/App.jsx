import { Button, ButtonGroup } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatPage from './Pages/ChatPage'
import Homepage from './Pages/Homepage'
import './index.css';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/chats' element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
