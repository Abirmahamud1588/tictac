import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './tictac/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
     <div className='main'>
     <Board></Board>
    </div>
   </div>
  )
}

export default App
