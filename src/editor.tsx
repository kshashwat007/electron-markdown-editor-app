import React, { useCallback, useEffect } from 'react'
import useCodemirror from './use-codemirror'
import './editor.scss'

interface Props{
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange,initialDoc } = props
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
      Editor
    </div>
  )
}

export default Editor