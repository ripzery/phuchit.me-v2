import React from 'react'
import "../styles/post.css"
import CodeBlock from '../components/CodeBlock'
import { MDXProvider } from "@mdx-js/react"

const components = {
  code: CodeBlock
}

export default function Post({
  children,
  pageContext
}) {

  return (
    <article className='post'>
      <header>
        {/* <h1>{node.frontmatter.title}</h1> */}
      </header>
      <div className='post-content'>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </article>
  )
}
