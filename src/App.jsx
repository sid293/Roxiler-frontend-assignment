import { useState } from 'react'
import './App.css'
import TransactionDashboard from './TransactionDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TransactionDashboard />
    </>
  )
}

export default App
