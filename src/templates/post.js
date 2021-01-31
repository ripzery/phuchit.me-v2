import React from 'react'
import "../styles/post.css"
import { MDXProvider } from "@mdx-js/react"

export default function Post({
  children,
  pageContext
}) {
  console.log(pageContext)
  return (
    <article className='post'>
      <header>
        {/* <h1>{node.frontmatter.title}</h1> */}
      </header>
      <div className='post-content'>
        <MDXProvider>{children}</MDXProvider>
      </div>
    </article>
  )
}
