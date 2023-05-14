import React, {useState} from 'react'
import './App.scss'

const App: React.FC = () => {
  const [count,setCount] = useState(0)

  return (
    <div className='app'>
      <header className='app-header'>
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App