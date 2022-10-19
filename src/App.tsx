import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PaginationComp from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PaginationComp />
    </div>
  )
}

export default App
