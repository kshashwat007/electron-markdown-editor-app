import React, {useState} from 'react'
import './App.scss'
import Editor from './editor'

const App: React.FC = () => {
  const [count,setCount] = useState(0)

  return (
    <div className='app'>
      <Editor />
    </div>
  )
}

export default App