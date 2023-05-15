import React, {useState,useCallback} from 'react'
import './App.scss'
import Editor from './editor'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!')
  const handleDocChange = useCallback(
    newDoc => setDoc(newDoc)
  ,[])
  
  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App