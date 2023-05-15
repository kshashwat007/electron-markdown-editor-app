import React, { useCallback, useEffect } from 'react'
import useCodemirror from './use-codemirror'
import './editor.scss'

interface Props{
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props

  // useCodemirror calls this function with update.state in it's updateListener which contains the doc. we get the doc and pass it to onChange function passed from App which sets the new string as the intial doc prop. useCallback is useful as it will return the cached function until there is a change in dependencies.
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),[onChange]
  )
  const [refContainer, editorView] = useCodemirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  },[])

  return (
    <div className='editor-wrapper' ref={refContainer}>
    </div>
  )
}

export default Editor