import React from 'react';
import './preview.scss'
import { unified } from 'unified';
import remarkParse from 'remark-parse/lib';
import remarkGfm from 'remark-gfm';
import remarkReact from 'remark-react';
// import 'github-markdown-css/github-markdown.css'

interface Props{
  doc: string
}
const Preview: React.FC<Props> = (props:Props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.doc).result
  return (
    <div className='preview markdown-body'>
      {md}
    </div>
  )
}

export default Preview